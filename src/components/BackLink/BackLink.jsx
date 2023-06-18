import { Link } from 'react-router-dom';
import css from './BackLink.module.css';

export default function BackLink({ backLinkLocation }) {
  return (
    <Link to={backLinkLocation.current} className={css.link}>
      Go Back
    </Link>
  );
}
