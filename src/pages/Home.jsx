import { useState, useEffect } from 'react';
import { fetchTrandMovies } from '../../src/services/API';
import { useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchTrandMovies()
      .then(({ data }) => setMovies([...data.results]))
      .catch(error => toast.error(error.message))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      <h1>Trending today</h1>

      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
      {movies &&
        movies.map(({ original_title, id, name }) => {
          return (
            <MoviesList
              key={id}
              location={location}
              original_title={original_title}
              name={name}
              id={id}
            />
          );
        })}
    </>
  );
}
