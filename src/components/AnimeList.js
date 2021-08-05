import AnimeListItem from "./AnimeListItem";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAnimes} from "../actions/animes";
import {getFilteringData} from "../actions/filtering";

const AnimeList = () => {
    const animes = useSelector((state) => state.animes.animes);
    const filtering = useSelector((state) => state.filtering);
    const dispatch = useDispatch();
    const location = useLocation();
    const { searchLine } = useParams();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);
    const [selectedProducers, setSelectedProducers] = useState([]);

    useEffect(() => {
        if (searchLine) {
            dispatch(getAnimes(searchLine));
        } else {
            dispatch(getAnimes());
        }
    }, [location.pathname]);

    useEffect(() => {
        if (!filtering.ready) {
            dispatch(getFilteringData());
        }
    })

    const onFiltersSubmit = (e) => {
        e.preventDefault();
        dispatch(getAnimes(searchLine, selectedGenres, selectedTypes, selectedProducers));
    }

    const onTypesChange = (e) => {
        if (e.target.checked) {
            setSelectedTypes([...selectedTypes, e.target.value]);
        } else {
            let temp = selectedTypes.filter(type => type !== e.target.value);
            setSelectedTypes(temp);
        }
        console.log(selectedTypes);
    };

    const onStatusesChange = (e) => {
        if (e.target.checked) {
            setSelectedStatuses([...selectedStatuses, e.target.value]);
        } else {
            let temp = selectedStatuses.filter(status => status !== e.target.value);
            setSelectedStatuses(temp);
        }
        console.log(selectedStatuses);
    };

    const onGenresChange = (e) => {
        if (e.target.checked) {
            setSelectedGenres([...selectedGenres, e.target.value]);
        } else {
            let temp = selectedGenres.filter(genre => genre !== e.target.value);
            setSelectedGenres(temp);
        }
        console.log(selectedGenres);
    };

    const onProducersChange = (e) => {
        if (e.target.checked) {
            setSelectedProducers([...selectedProducers, e.target.value]);
        } else {
            let temp = selectedProducers.filter(producer => producer !== e.target.value);
            setSelectedProducers(temp);
        }
        console.log(selectedProducers);
    };

    const onClearClick = () => {
        setSelectedStatuses([]);
        setSelectedGenres([]);
        setSelectedTypes([]);
        setSelectedProducers([]);
        dispatch(getAnimes(searchLine));
    }

    return (
        <>
            {animes.length
                ?   <div className="row">
                      <div className="col-9">
                          <div className="album py-5 bg-light">
                              <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                                    {animes.map((anime) => (
                                        <AnimeListItem key={anime.id} anime={anime} />
                                    ))}
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="col-3">
                          <form onSubmit={onFiltersSubmit}>
                              <h3>Status:</h3>
                              <div className="form-check">
                                  {filtering.statuses.map((status, index) => (<div className='container'>
                                            <input className="form-check-input" type="checkbox" value={status}
                                                   id={`statusCheckBox${index}`} onChange={onStatusesChange}/>
                                            <label className="form-check-label" htmlFor={`statusCheckBox${index}`}>
                                                {status}
                                            </label>
                                        </div>)
                                  )}
                              </div>
                              <h3>Type:</h3>
                              <div className="form-check">
                                  {filtering.types.map((type, index) => (<div className='container'>
                                            <input className="form-check-input" type="checkbox" value={type}
                                                   id={`typesCheckBox${index}`} onChange={onTypesChange}/>
                                            <label className="form-check-label" htmlFor={`typesCheckBox${index}`}>
                                                {type}
                                            </label>
                                        </div>)
                                  )}
                              </div>
                              <h3>Producer:</h3>
                              <div className="form-check">
                                  {filtering.producers.map((producer, index) => (<div className='container'>
                                            <input className="form-check-input" type="checkbox" value={producer}
                                                   id={`producersCheckBox${index}`} onChange={onProducersChange}/>
                                            <label className="form-check-label" htmlFor={`producersCheckBox${index}`}>
                                                {producer}
                                            </label>
                                        </div>)
                                  )}
                              </div>
                              <h3>Genre:</h3>
                              <div className="form-check">
                                  {filtering.genres.map((genre, index) => (<div className='container'>
                                            <input className="form-check-input" type="checkbox" value={genre}
                                                   id={`genresCheckBox${index}`} onChange={onGenresChange}/>
                                            <label className="form-check-label" htmlFor={`genresCheckBox${index}`}>
                                                {genre}
                                            </label>
                                        </div>)
                                  )}
                              </div>
                              <button type='submit' className='btn btn-outline-dark me-4'>Apply</button>
                              <button type='reset' className='btn btn-outline-dark'
                                      onClick={onClearClick}>Clear</button>
                          </form>
                      </div>
                    </div>

                : <h2>No results</h2>
            }
        </>
    );
}

export default AnimeList