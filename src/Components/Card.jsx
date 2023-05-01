function Card({gnome}) {
  return (
    <div className="card" id={gnome.id}>
      <img className="gnomeimg" src={gnome.thumbnail} alt={gnome.name} />
      <h1>{gnome.name}</h1>
      <p>Age: {gnome.age}</p>
      <p>Professions: {gnome.professions}</p>
      <p>Friends: {gnome.friends}</p>
      <p>Height: {gnome.height}</p>
      <p>Weight: {gnome.weight}</p>
      <p>Hair color: {gnome.hair_color}</p>
    </div>
  );
}

export default Card;
