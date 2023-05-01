function Filter({ professions, selectedProfession, setSelectedProfession }) {
  const handleSelectedProfession = (ev) => {
    const profession = ev.target.value;
    setSelectedProfession(profession);
  };

  return (
    <select defaultValue="default option"
      className="profession"
      value={selectedProfession}
      onChange={(ev) => handleSelectedProfession(ev)}
    >
      <option value="default option" disabled hidden>Select a profession</option>
      <option value="All">All</option>
      {professions.map((profession) => (
        <option key={profession} value={profession}>
          {profession}
        </option>
      ))}
    </select>
  );
}

export default Filter;
