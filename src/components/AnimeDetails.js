import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { setAnimeDetails } from "../actions/animes";
import axios from "axios";
import {useEffect} from "react";

import CharacterCard from "./CharacterCard";

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
            {anime && <div className="container">
                <div className="row justify-content-center">
                    <div className="container title ">
                        <h1 className='mb-4'>{anime.title}</h1>
                    </div>
                    <hr/>
                    <div className="col-lg-3 me-2">
                        <img src={anime.poster} alt={anime.title} width='225' height='315' className='animePoster' />
                        <p>
                            <span className='h4 mt-5 me-2'>Rating:</span>
                            <span className='h4'> {anime.rating} </span>
                        </p>
                    </div>
                    <div className="col-lg-6 animeInfo">
                        <div className="container">
                            <span className="infoCategory h3">
                                Information:</span>
                            <p><br/>
                                <span className='h4 mt-5'>Type:</span>
                                <Link to={`animes/${anime.type}`}
                                      className='btn btn-sm btn-outline-dark ms-2'>{anime.type}</Link>
                            </p>
                            <p>
                                <span className='h4 mt-5'>Status:</span>
                                <Link to={`animes/${anime.status}`}
                                      className='btn btn-sm btn-outline-dark ms-2'>{anime.status}</Link>
                            </p>
                            <p>
                                <span className='h4 mt-5 me-2'>Release date:</span>
                                {anime.release_date}
                            </p>
                            <p>
                                <span className='h4 mt-5 me-2'>Genres:</span>
                                {anime.genres.map((genre) => (
                                    <Link to={`animes/${genre}`}
                                      className='btn btn-sm btn-outline-dark me-1'>{genre}</Link>
                                ))}
                            </p>
                            <p>
                                <span className='h4 mt-5'>Producer:</span>
                                <Link to={`animes/${anime.producer}`}
                                      className='btn btn-sm btn-outline-dark ms-2'>{anime.producer}</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <h2 className='infoCategory'>Main Characters</h2>
                <div className="row">
                    {anime.characters.filter(character => character.main_character).map(character => (
                        <div className="col-lg-2">
                            <CharacterCard character={character} />
                        </div>
                    ))}
                </div>
                <h2 className='infoCategory'>Screenshots</h2>
                <div className="row">
                    {anime.anime_screenshots.map(screenshot => (
                        <div className="col-lg-2">
                            <img src={screenshot.screenshot} alt={`Screenshot from ${anime.title}`}
                                 width='200' height='112'/>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}

export default AnimeDetails;