import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function More() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getMovie();
  }, []);
  const getMovie = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  console.log(movie);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <p>{movie.description_full}</p>
      <p>{movie.year}</p>
      <p>{movie.rating}</p>
      <p>{movie.runtime}</p>
    </div>
  );
}

export default More;
