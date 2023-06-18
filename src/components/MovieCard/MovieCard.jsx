import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { title, name, vote_average, overview, genres, poster_path } = movie;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <div className={css.movieCard}>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : defaultImg
          }
          alt={title}
          className={css.image}
        />
      </div>
      <div className={css.cardDescription}>
        <h2>{title || name}</h2>
        <p>User score: {(vote_average * 10).toFixed()}%</p>
        <p>Overviw </p>
        <p>{overview}</p>
        <p>Genres</p>
        <div>
          {genres.map(genre => {
            return ` ${genre.name}`;
          })}
        </div>
      </div>
    </div>
  );
}
