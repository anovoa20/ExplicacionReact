import { Link } from "react-router-dom";

//[AN] Acá busco mostrar las dos maneras de crear funciones

/*
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
*/

/*
//Arrow function con objeto (args) y se mapea cada atributo
const CardRazasPerros = (args) => {
  return (
    <li className="breedCard">
      <Link to="/rhodesian">
        <div className={args.fondo}>
          <div className="contenedorImagen">
            <img src={args.imagen} alt={args.nombreRaza} />
          </div>
          <span className="breedTitle">{args.nombreRaza}</span>
        </div>
      </Link>
    </li>
  );
};
*/

//Arrow function con lista de tributos ({atrib1, atrib2}) y se mapea cada atributo
const CardRazasPerros = ({ fondo, nombreRaza, imagen }) => {
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
};

export default CardRazasPerros;
