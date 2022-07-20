import "./styles/styles.css";
import borderCollie from "./media/borderCollie.jpg";
import rhodesian from "./media/rhodesian.jpg";
import logo from "./media/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="Logo" className="logo" />
          </li>
          <li>
            <button className="button mainButton">Nuevo post</button>
          </li>
          <li>
            <div className="buscar">
              <input placeholder="Buscar una Raza" />
              <i className="fa-solid fa-magnifying-glass button iconoBusqueda"></i>
            </div>
          </li>
          <li>
            <button className="button secondaryButton">Iniciar Sesión</button>
          </li>
          <li>
            <button className="button mainButton">Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className="breedCardContainer">
            <CardRazasPerros
              nombreRaza="Border Collie"
              imagen={borderCollie}
              fondo="backGroundBrown"
            />
            <CardRazasPerros
              nombreRaza="Rhodesian"
              imagen={rhodesian}
              fondo="backGroundPurple"
            />
            <CardRazasPerros
              nombreRaza="Border Collie"
              imagen={borderCollie}
              fondo="backGroundPurple"
            />
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function CardRazasPerros(props) {
  return (
    <li className="breedCard">
      <div className={props.fondo}>
        <div className="contenedorImagen">
          <img src={props.imagen} alt={props.nombreRaza} />
        </div>
        <span className="breedTitle">{props.nombreRaza}</span>
      </div>
    </li>
  );
}

export default App;
