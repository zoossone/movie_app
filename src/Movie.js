import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//Movie component에는 state가 필요하지 않다. state가 필요하지 않을때는 굳이 class형 component를 고집할 필요가 없다.
function Movie({ year, title, summary, poster, genres }) {
    return <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="generes">{genres.map((genre, index) => {
                return <li key={index} className="generes__genre">{genre}</li>
            })}</ul>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;