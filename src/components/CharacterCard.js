import {Link} from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <div className="card char-card">
            <img src={character.picture} alt={character.name} className="card-img-top" width='96' height='150'/>
            <div className="card-body">
                <Link to={`characters/${character.id}`} className='text-dark'>
                    <p className="card-text">{character.name}</p>
                </Link>
            </div>
        </div>
    );
}

export default CharacterCard;