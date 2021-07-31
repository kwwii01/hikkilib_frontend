import AnimeListItem from "./AnimeListItem";
import { useDispatch, useSelector } from "react-redux";
import { setAnimes } from "../actions/animes";
import { useEffect } from "react";
import axios from "axios";

const AnimeList = () => {
    const animes = useSelector((state) => state.animes.animes);
    const dispatch = useDispatch();

    const fetchAnimes = async () => {
        const res = await axios.get('http://localhost:8000/api/animes/')
            .catch((err) => console.log(err))
        dispatch(setAnimes(res.data))
    };

    useEffect(() => {
        if (animes.length) return;
        fetchAnimes();
    });
    return (
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
                    {animes.map((anime) => (
                        <AnimeListItem key={anime.id} anime={anime} />
                    ))}
                </div>
              </div>
            </div>
    );
}

export default AnimeList