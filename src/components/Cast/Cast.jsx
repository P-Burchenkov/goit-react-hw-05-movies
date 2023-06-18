import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/API';
import css from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [casts, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(({ data }) => {
      setCast(data.cast);
    });
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <ul className={css.cast}>
      {casts &&
        casts.map(({ name, id, profile_path }) => {
          return (
            <li key={id} className={css.item}>
              <div className={css.wrapper}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={286}
                  alt={name}
                  className={css.img}
                />
              </div>

              <div className={css.name}>{name}</div>
            </li>
          );
        })}
    </ul>
  );
}
