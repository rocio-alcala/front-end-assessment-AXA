function Filter({ professions, selectedProfession, setSelectedProfession }) {
  const handleSelectedProfession = (ev) => {
    const profession = ev.target.value;
    setSelectedProfession(profession);
  };

  return (
    <label>Search by profession
      <select 
        className="profession"
        value={selectedProfession}
        onChange={handleSelectedProfession}
      >
        <option value="">All</option>
        {professions.map((profession) => (
          <option key={profession} value={profession}>
            {profession}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Filter;
