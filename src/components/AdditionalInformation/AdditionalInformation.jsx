import css from './AdditionalInformation.module.css';
import { Link } from 'react-router-dom';

export default function AdditionalInformation() {
  return (
    <div className={css.AdditionalInformation}>
      <p className={css.title}>Additional information</p>
      <ul>
        <li className={css.cast}>
          <Link to="cast" className={css.link}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="review" className={css.link}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
