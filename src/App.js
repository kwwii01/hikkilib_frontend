import {BrowserRouter as Router, Route} from "react-router-dom";

import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import Header from "./components/Header";
import Register from "./components/Register";
import Login from "./components/Login";

import {Provider} from "react-redux";
import store from "./store";

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <div className='container'>
                    <Header />
                    <Route path='/' exact render={(props) => (
                        <AnimeList  />
                    )} />
                    <Route path='/animes/:id'>
                        <AnimeDetails />
                    </Route>
                    <Route path='/users/register'>
                        <Register />
                    </Route>
                    <Route path='/users/login'>
                        <Login />
                    </Route>
                </div>
            </Provider>
        </Router>
    )
}

export default App;
