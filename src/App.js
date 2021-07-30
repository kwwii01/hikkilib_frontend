import {useEffect, useState} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import AnimeList from "./components/AnimeList";
import AnimeDetails from "./components/AnimeDetails";
import Header from "./components/Header";
import Register from "./components/Register";

const App = () => {
    const [animes, setAnimes] = useState([])

    useEffect(() => {
        const getAnimes = async () => {
            const animesFromServer = await fetchAnimes()
            setAnimes(animesFromServer)
        }

        getAnimes()
    }, [])

    //Fetch Animes
    const fetchAnimes = async () => {
        const res = await fetch('/api/animes/')
        const data = await res.json()
        return data
    }

    return (
        <Router>
            <div className='container'>
                <Header />
                <Route path='/' exact render={(props) => (
                    <AnimeList animes={animes} />
                )} />
                <Route path='/animes/:id'>
                    <AnimeDetails />
                </Route>
                <Route path='/users/login'>
                    <Register />
                </Route>
            </div>
        </Router>
    )
}

export default App;
