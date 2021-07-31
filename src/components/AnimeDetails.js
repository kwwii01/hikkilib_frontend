import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setAnimeDetails } from "../actions/animes";
import axios from "axios";
import {useEffect} from "react";

const AnimeDetails = () => {
    const anime = useSelector((state) => state.animes.anime);
    const { animeId } = useParams();
    const dispatch = useDispatch();
    const fetchAnimeDetails = async () => {
        const res = await axios.get(`http://localhost:8000/api/animes/${animeId}/`)
            .catch(err => console.log(err))
        console.log(res.data)
        dispatch(setAnimeDetails(res.data))
    }

    useEffect(() => {
        if (anime == null) {
            fetchAnimeDetails();
        }
    })

    return (
        <div className="container">
            {anime && <div className="row">
                <div className="col-3">
                    <img src={anime.poster || ''} alt={anime.title || ''} width='225' height='315'/>
                </div>
                <div className="col-5">
                    <p>
                        {anime.title || ''}
                    </p>
                    <p>
                        {anime.description || ''}
                    </p>
                </div>
            </div>}
        </div>
    )
}

export default AnimeDetails;