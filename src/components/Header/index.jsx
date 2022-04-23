import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import blanco from "./assets/img/blanco.png";
import { ReactComponent as CartIcon } from "./assets/img/carrito.svg";
import perfil from "./assets/img/perfil.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [menu, setMenu] = useState(false);
  const [menuHeader, setMenuHeader] = useState(false);
  let history = useHistory();
  const dispatch = useDispatch();
  const productsBuyed = useSelector((state) => {
    return state.tienda.productsBuyed;
  });
  const logeado = useSelector((state) => {
    return state.auth.auth;
  });
  const closeLogin = () => {
    dispatch({
      type: "SET_LOGIN",
      payload: false,
    });
    history.push("/");
    setMenu(false);
  };
  return (
    <header className="header">
      <section className="header__container">
        <div className="header-izq">
          <a href=".">
            <img class="header__logo" src={blanco} alt="logo" />
          </a>
          <div className="container-icon-menu">
            <FontAwesomeIcon
              icon={faBars}
              className="header_icono"
              onClick={() => setMenuHeader(!menuHeader)}
            />
            {menuHeader && (
              <div className="menu-header">
                <ul>
                  <li>
                    <Link to="/adopta">Adopta</Link>
                  </li>
                  <li>
                    <Link to="/nosotros">Nosotros</Link>
                  </li>
                  <li>
                    <Link to="/tienda">Tienda </Link>
                  </li>
                  <li>
                    <Link to="/consultas">Consultas</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="header-der">
          <nav className="header__nav">
            <ul className="header__ul">
              <li>
                <Link to="/adopta">Adopta</Link>
              </li>
              <li>
                <Link to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="/tienda">Tienda </Link>
              </li>
              <li>
                <Link to="/consultas">Consultas</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </nav>
          <div className="cart">
            <span className="cart__quantity">
              {productsBuyed.reduce((acc, curr) => acc + curr.quantity, 0)}
            </span>
            <span className="icono">
              <Link to="/pagar">
                <CartIcon />
              </Link>
            </span>
          </div>
          <div className="container-btn">
            <button className="btn btn-donar">
              <Link to="/donar">Donar</Link>
            </button>
            {logeado ? (
              <div className="container-menu">
                <img
                  className="perfil"
                  src={perfil}
                  alt="perfil"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
                {menu && (
                  <div className="menu">
                    <ul>
                      <li onClick={() => history.push("/gestion")}>Gestión</li>
                      <li onClick={() => history.push("/registrar")}>
                        Agregar mascotas
                      </li>
                      <li onClick={() => history.push("/agregarProducto")}>
                        Agregar productos
                      </li>
                      <li onClick={closeLogin}>cerrar sesion</li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <button className="btn btn-login">
                <Link to="/login">Iniciar Sesión</Link>
              </button>
            )}
          </div>
        </div>
      </section>
    </header>
  );
}

export { Header };
