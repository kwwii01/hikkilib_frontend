import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";

import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return (
        <Provider store={store}>
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
        </Provider>
    )
}

export default App;
