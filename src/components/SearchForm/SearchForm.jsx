import css from './SearchForm.module.css';
import { FaSistrix } from 'react-icons/fa';

export default function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className={css.searchForm}>
      <input type="text" name="queryString" className={css.searchForm__input} />
      <button type="submit" className={css.searchForm__button}>
        <span>
          <FaSistrix width="48" height="48" />
        </span>
      </button>
    </form>
  );
}
