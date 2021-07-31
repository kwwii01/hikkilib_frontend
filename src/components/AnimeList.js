import AnimeListItem from "./AnimeListItem";
import {connect} from "react-redux";
import {getAnimes} from "../actions/animes";
import PropTypes from "prop-types"
import {Component} from "react";

export class AnimeList extends Component {
    static propTypes = {
        animes: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getAnimes()
    }

    render() {
        return (
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
                    {this.props.animes.map((anime) => (
                        <AnimeListItem key={anime.id} anime={anime} />
                    ))}
                </div>
              </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    animes: state.animes.animes
})

export default connect(mapStateToProps, { getAnimes })(AnimeList);