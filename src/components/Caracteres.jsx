function Caracteres({ character }) {
  return (
    <div className="text-center p-5">
      <h3>{character.name}</h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      ></img>
    </div>
  );
}

export default Caracteres;
