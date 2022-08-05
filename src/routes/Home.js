import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function Home() {
  const [loading, setLoading] = useState(true);
  const [choice, setChoice] = useState('rating');
  const [movies, setMovies] = useState([]);
  const getMoviesByRating = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8&sort_by=rating&with_rt_ratings=true'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  const getMoviesByYear = async () => {
    const response = await fetch(
      'https://yts.mx/api/v2/list_movies.json?limit=50&sort_by=year'
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  function onClickRating() {
    setLoading(true);
    setChoice('rating');
  }
  function onClickYear() {
    setLoading(true);
    setChoice('year');
  }
  useEffect(() => {
    if (choice === 'rating') {
      getMoviesByRating();
    } else if (choice === 'year') {
      getMoviesByYear();
    }
  }, [choice]);

  console.log(movies);
  console.log(typeof movies);
  return (
    <section className="container">
      <div>
        <button onClick={onClickRating}>Rating</button>
        <button onClick={onClickYear}>year</button>
      </div>

      {loading ? (
        <div className="loader">'loading...'</div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              rating={movie.rating}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
