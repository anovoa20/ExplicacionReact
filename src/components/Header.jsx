import logo from "media/logo.png";

const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
