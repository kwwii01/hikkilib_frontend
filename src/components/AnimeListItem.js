import {Link} from "react-router-dom";

const AnimeListItem = ({anime}) => {
    return (
        <Link to={`/animes/${anime.id}`}>
            <div className="col">
              <div className="card shadow-sm">
                <img src={anime.poster} alt={anime.title} className='card-img-top'/>
                <div className="card-body">
                  <p className="card-text">{anime.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">{anime.year}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">{anime.type}</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">{anime.status}</button>
                    </div>
                    <small>{anime.rating}</small>
                  </div>
                </div>
              </div>
            </div>
        </Link>
    )
}

export default AnimeListItem