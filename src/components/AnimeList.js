import AnimeListItem from "./AnimeListItem";

const AnimeList = ({ animes }) => {
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
    )
}

export default AnimeList