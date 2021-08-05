import AnimeListItem from "./AnimeListItem";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAnimes} from "../actions/animes";

const AnimeList = () => {
    const animes = useSelector((state) => state.animes.animes);
    const dispatch = useDispatch();
    const location = useLocation();
    const { searchLine } = useParams();

    useEffect(() => {
        if (searchLine) {
            dispatch(getAnimes(searchLine));
        } else {
            dispatch(getAnimes());
        }
    }, [location.pathname]);

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