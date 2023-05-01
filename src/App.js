import "./App.css";
import { useQuery } from "react-query";
import Card from "./Components/Card";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { useState } from "react";

//usar AXIOS
//hay que solucionar el tema de los errores en CONSOLAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Porque hay un delay cuando hago el filtro o la busqueda??
//aca filtro los gnomes en una variable

function App() {
  const [selectedGnomes, setSelectedGnomes] = useState([]);

  const { data: gnomes } = useQuery("Brastlewark", () => {
    return fetch(
      "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    )
      .then((brastlewark) => {
        return brastlewark.json();
      })
      .then((brastlewark) => {
        const gnomes = brastlewark.Brastlewark;
        setSelectedGnomes(gnomes);
        return gnomes;
      });
  });

  
  if (!gnomes) {
    return "loading";
  }

  const professions = Object.keys(
    gnomes.reduce((acc, gnome) => {
      gnome.professions.forEach((profession) => {
        if (!acc.hasOwnProperty(profession)) {
          acc[profession] = true;
        }
      });
      return acc;
    }, {})
  );

/*     const professions = new Set (gnomes.reduce((acc, gnome) => {
    gnome.professions.forEach((profession) => {
      acc.push(profession);
    });
  return acc}, [])) */

console.log("@selectedgnomes1",selectedGnomes)
  return (
    <main>
      <Header></Header>
      <NavBar
        gnomes={gnomes}
        professions={professions}
        selectedGnomes={selectedGnomes}
        setSelectedGnomes={setSelectedGnomes}
      ></NavBar>
      <section>{selectedGnomes.map((gnome, index) => {
        if (index < 100) {
          return <Card gnome={gnome} key={gnome.id}></Card>;
        } else {
          return null;
        }
      })}</section>
      <Footer></Footer>
    </main>
  );
}

export default App;
