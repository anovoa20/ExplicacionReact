function CardRazasPerros({ fondo, nombreRaza, imagen }) {
  return (
    <li className="breedCard">
      <div className={fondo}>
        <div className="contenedorImagen">
          <img src={imagen} alt={nombreRaza} />
        </div>
        <span className="breedTitle">{nombreRaza}</span>
      </div>
    </li>
  );
}

export default CardRazasPerros;
