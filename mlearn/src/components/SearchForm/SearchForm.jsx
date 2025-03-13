import "./SearchForm.css";
import { usePostStore } from "../../Store/UsePostStore";

function SearchForm() {
  const { setSearchQuery, searchQuery } = usePostStore();

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="searchForm">
      <input
        type="text"
        className="searchForm__input"
        placeholder="Search post title"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchForm;
