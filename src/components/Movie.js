import PropTypes from 'prop-types';

function Movie({ title, coverImg, genres, rating, summary, year }) {
  return (
    <div>
      <h1>{title}</h1>
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
  title:PropTypes.string.isRequired,
  
}


export default Movie;
