import { Link } from 'react-router-dom';

export default function MoviesList({ location, id, original_title, name }) {
  return (
    <ul>
      <li>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          {original_title || name}
        </Link>
      </li>
    </ul>
  );
}
