import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchForm">
      <input
        type="text"
        className="searchForm__input"
        placeholder="Search post title"
      />
      <button className="searchForm__button">Search</button>
    </div>
  );
}

export default SearchForm;
