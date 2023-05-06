
function SearchBar({ searchState, setSearchState }) {
  const handleSearch = (ev) => {
    setSearchState(ev.target.value);
  };

  const handleCancel = () => {
    setSearchState("");
  };

  return (
    <>
      <input
        placeholder="Search by name"
        className="searchName"
        type="text"
        value={searchState}
        onChange={(ev) => handleSearch(ev)}
      ></input>
      <button onClick={handleCancel}>X</button>
    </>
  );
}

export default SearchBar;
