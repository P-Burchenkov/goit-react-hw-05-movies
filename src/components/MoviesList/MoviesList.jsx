import { Link } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ movies, location }) {
  return (
    <ul className={css.movieList}>
      {movies.map(({ original_title, id, name }) => {
        return (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.link}
            >
              {original_title || name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
