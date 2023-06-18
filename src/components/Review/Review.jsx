import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieRewies } from 'services/API';
import css from './Review.module.css';

export default function Review() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    fetchMovieRewies(movieId).then(({ data }) => {
      if (data.results.length > 0) {
        setReview(data.results);
      }
    });
  }, [movieId]);

  return reviews ? (
    reviews.map(({ id, author, content }) => {
      return (
        <div key={id}>
          <div className={css.author}>Author: {author}</div>
          <div>{content}</div>
        </div>
      );
    })
  ) : (
    <div>We don`t have any reviews for this movie</div>
  );
}
