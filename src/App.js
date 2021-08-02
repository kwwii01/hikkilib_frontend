import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import axios from "axios";

import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";
import {loadUser} from "./actions/auth";


const App = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        if ((auth.isAuthenticated == null) || (auth.isAuthenticated  && !auth.user)) {
            const token = auth.token;
            dispatch(loadUser(token));
        }
    });

    return (
        <Router>
            <div className='container'>
                <Header />
                <Switch>
                    <Route path='/' exact render={(props) => (
                        <AnimeList  />
                    )} />
                    <Route path='/animes/:animeId' exact>
                        <AnimeDetails />
                    </Route>
                    <Route path='/users/register' exact>
                        <Register />
                    </Route>
                    <Route path='/users/login' exact>
                        <Login />
                    </Route>
                    <Route>
                        404 not found
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;
