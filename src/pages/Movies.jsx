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
    setIsLoading(true);
    if (!queryString) {
      setIsLoading(false);
      setMovies(null);
      return;
    }

    fetchMovie(queryString)
      .then(({ data }) => {
        if (data.results.length === 0) {
          return toast.warn(`There is no films with name  ${queryString}`);
        }
        setMovies([...data.results]);
      })
      .catch(error => toast.error(error.message))
      .finally(setIsLoading(false));
  }, [queryString]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
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
        movies.map(({ id, name, original_title }) => {
          return (
            <MoviesList
              key={id}
              location={location}
              id={id}
              original_title={original_title}
              name={name}
            />
          );
        })}
    </>
  );
}
