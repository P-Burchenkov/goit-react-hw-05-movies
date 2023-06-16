import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieByID } from 'services/API';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  console.log(backLinkLocation);

  useEffect(() => {
    fetchMovieByID(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocation.current}>Go Back</Link>
      {movie && <MovieCard movie={movie} />}
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>{' '}
          </li>
          <li>
            <Link to="review">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
}
