import css from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const { title, name, vote_average, overview, genres, poster_path } = movie;
  return (
    <div className={css.movieCard}>
      <div>
        {' '}
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
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
