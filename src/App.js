import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animeList:[]
    }
    this.fetchAnimes = this.fetchAnimes.bind(this)
  };

  componentWillMount() {
    this.fetchAnimes()
  }

  fetchAnimes(){
    console.log('Fetching...');

    fetch('http://localhost:8000/api/animes/')
        .then(res => res.json())
        .then(data => this.setState({ animeList: data }))
  }

  render() {
    var animes = this.state.animeList;
    return(
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
              {animes.map(function (anime, index){
                return(
                    <div key={index} className="col">
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
                )
              })}
            </div>
          </div>
        </div>
    )
  }
}

export default App;
