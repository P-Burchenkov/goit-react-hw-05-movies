import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { fetchMovieByID } from 'services/API';
import MovieCard from 'components/MovieCard/MovieCard';
import AdditionalInformation from 'components/AdditionalInformation';
import BackLink from 'components/BackLink';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    fetchMovieByID(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <BackLink backLinkLocation={backLinkLocation} />
      {movie && <MovieCard movie={movie} />}
      <AdditionalInformation />
      <Outlet />
    </>
  );
}
