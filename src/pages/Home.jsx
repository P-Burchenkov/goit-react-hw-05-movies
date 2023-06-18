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
    try {
      fetchTrandMovies().then(({ data }) => setMovies([...data.results]));
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <h1 className="hero-title">Trending today</h1>

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
      {movies && <MoviesList movies={movies} location={location} />}
    </>
  );
}
