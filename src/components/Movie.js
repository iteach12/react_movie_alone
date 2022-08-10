import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ title, coverImg, genres, rating, summary, year, id }) {
  return (
    <div
      style={{
        backgroundColor: 'teal',
      }}
    >
      <Link to={`/movie/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>
        <span>{rating}</span>
        <span>{year}</span>
      </div>
      <img src={coverImg} alt={title}></img>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <p>{summary.length < 180 ? summary : `${summary.slice(0, 180)}...`}</p>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
