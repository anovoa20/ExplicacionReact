import { Link } from "react-router-dom";

function CardRazasPerros({ fondo, nombreRaza, imagen }) {
  return (
    <li className="breedCard">
      <Link to="/rhodesian">
        <div className={fondo}>
          <div className="contenedorImagen">
            <img src={imagen} alt={nombreRaza} />
          </div>
          <span className="breedTitle">{nombreRaza}</span>
        </div>
      </Link>
    </li>
  );
}

export default CardRazasPerros;
