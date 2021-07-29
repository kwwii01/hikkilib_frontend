import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const AnimeDetails = () => {
    const { id } = useParams()
    const [anime, setAnime] = useState([])

    useEffect(() => {
        const getAnime = async () => {
            const animeFromServer = await fetchAnime()
            setAnime(animeFromServer)
        }

        getAnime()
    })

    const fetchAnime = async () => {
        const res = await fetch(`/api/animes/${id}`)
        const data = await res.json()
        return data
    }

    return (
        <div className="container">
            <h3>{anime.title}</h3>
            <img src={anime.poster} alt={anime.title} />
            <Link to='/'>Back to anime list</Link>
        </div>
    )
}

export default AnimeDetails