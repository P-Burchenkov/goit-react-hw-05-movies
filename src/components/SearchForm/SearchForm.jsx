export default function SearchForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="queryString" />
      <button type="submit">Search</button>
    </form>
  );
}
