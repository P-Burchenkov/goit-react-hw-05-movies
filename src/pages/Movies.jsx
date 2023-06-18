import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovie } from 'services/API';
import { toast } from 'react-toastify';
import { ThreeDots } from 'react-loader-spinner';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const queryString = searchParams.get('query') ?? '';

  const onSubmit = evt => {
    evt.preventDefault();
    const nextParams = evt.target.elements.queryString.value;
    if (!nextParams) {
      return toast.warn('Plase, enter film name!');
    }
    const query = nextParams !== '' ? { query: nextParams } : {};
    setSearchParams(query);
    evt.target.elements.queryString.value = '';
  };

  useEffect(() => {
    if (!queryString) {
      setMovies(null);
      return;
    }

    setIsLoading(true);

    try {
      fetchMovie(queryString).then(({ data }) => {
        if (data.results.length === 0) {
          toast.warn(`There is no films with name  ${queryString}`);
          setIsLoading(false);
          return;
        }
        setMovies([...data.results]);
        setIsLoading(false);
      });
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  }, [queryString]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />

      {movies && <MoviesList movies={movies} location={location} />}
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
    </>
  );
}
