import Filter from "./Filter";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";

//eleminar componente

function NavBar({ gnomes, professions, selectedGnomes, setSelectedGnomes }) {
  const [selectedProfession, setSelectedProfession] = useState();
  const [professionArrayState, setProfessionArrayState] = useState();

  useEffect(() => {
    function filterArray() {
      const professionArray = gnomes.filter((gnome) =>
        gnome.professions.includes(selectedProfession)
      );
      setProfessionArrayState(professionArray);
      selectedProfession==="All" ? setSelectedGnomes(gnomes) : setSelectedGnomes(professionArray);
      console.log("@esto pasa cuando se ejecuta el useEffect", professionArray);
    }
    if (selectedProfession) {
      filterArray();
    }
  }, [selectedProfession, gnomes, setSelectedGnomes]);

  return (
    <nav className="navbar">
      <SearchBar
        professionArrayState={professionArrayState}
        selectedProfession={selectedProfession}
        setSelectedGnomes={setSelectedGnomes}
        gnomes={gnomes}
        selectedGnomes={selectedGnomes}
      ></SearchBar>
      <Filter
        selectedProfession={selectedProfession}
        setSelectedProfession={setSelectedProfession}
        professions={professions}
      ></Filter>
    </nav>
  );
}

export default NavBar;
