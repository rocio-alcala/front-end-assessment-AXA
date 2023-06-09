import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Filter from "./Components/Filter";
import SearchBar from "./Components/SearchBar";

//agregar numero de la pagina

const PAGE_SIZE = 6;

function App() {
  const [allGnomes, setAllGnomes] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState("");
  const [searchState, setSearchState] = useState("");
  const [pageState, setPageState] = useState(1);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
      )
      .then((response) => {
        setAllGnomes(response.data.Brastlewark);
      })
      .catch((error) => {
        console.error("@error fetching gnomes", error);
      });
  }, []);

  const professions = useMemo(
    () => [...new Set(allGnomes.flatMap((gnome) => gnome.professions))],
    [allGnomes]
  );

  if (!allGnomes.length) {
    return "loading";
  }

  const searchGnomes = allGnomes.filter((gnome) =>
    gnome.name.toLowerCase().includes(searchState.toLowerCase())
  );
  const renderGnomes = selectedProfession
    ? searchGnomes.filter((gnome) =>
        gnome.professions.includes(selectedProfession)
      )
    : searchGnomes;

  return (
    <main>
      <Header></Header>
      <nav>
        <SearchBar
          searchState={searchState}
          setSearchState={setSearchState}
        ></SearchBar>
        <Filter
          professions={professions}
          selectedProfession={selectedProfession}
          setSelectedProfession={setSelectedProfession}
        ></Filter>
      </nav>
      <section>
        {renderGnomes.map((gnome, index) => {
          if (
            index < pageState * PAGE_SIZE &&
            index >= (pageState - 1) * PAGE_SIZE
          ) {
            return <Card gnome={gnome} key={gnome.id}></Card>;
          } else {
            return null;
          }
        })}
      </section>
      <aside>
        <button
          disabled={pageState === 1 ? true : false}
          onClick={() => {
            setPageState((prevState) => prevState - 1);
            window.scrollTo(0, 0);
          }}
        >
          Anterior
        </button>
        <button
          disabled={
            pageState === Math.ceil(renderGnomes.length / PAGE_SIZE)
              ? true
              : false
          }
          onClick={() => {
            setPageState((prevState) => prevState + 1);
            window.scrollTo(0, 0);
          }}
        >
          Siguiente
        </button>
      </aside>
      <Footer></Footer>
    </main>
  );
}
export default App;
