import { useState } from "react";
//que se encargue solo de controlar el searchState y que setsearchstate este definido mas arriba
function SearchBar({
  gnomes,
  setSelectedGnomes,
  selectedGnomes,
  selectedProfession,
  professionArrayState,
}) {
  const [searchState, setSearchState] = useState("");

  const handleSearch = (ev) => {
    setSearchState(ev.target.value);
    const searchGnomes = selectedGnomes.filter((gnome) =>
      gnome.name.toLowerCase().includes(ev.target.value.toLowerCase())
    );
    setSelectedGnomes(searchGnomes);
  };

  const handleCancel = () => {
    setSearchState("");
    if (selectedProfession) {
      selectedProfession === "All"
        ? setSelectedGnomes(gnomes)
        : setSelectedGnomes(professionArrayState);
    } else {
      setSelectedGnomes(gnomes);
    }
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
      <button onClick={() => handleCancel()}>X</button>
    </>
  );
}

export default SearchBar;
