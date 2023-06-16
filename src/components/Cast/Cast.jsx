import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/API';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCast] = useState(null);
  console.log(movieId);

  useEffect(() => {
    fetchCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <ul>
      {casts &&
        casts.map(({ name, id, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                width={250}
                alt={name}
              />

              <div>{name}</div>
            </li>
          );
        })}
    </ul>
  );
}
