import React from "react";
import { Link } from "react-router-dom";
import "./gestion.css";
const PageGestion = () => {
  return (
    <div className="gestion-container">
      <div className="container-gestion-mascota">
        <h2>Mascotas</h2>
        <img
          src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-perros-y-gatos-pueden-ser-amigos.png?itok=AaztstEz"
          alt=""
        />
        <ul>
          <li>
            <Link to="/registrarMascota">Agregar mascota</Link>
          </li>
          <li>
            <Link to="/editarMascota">Editar mascota</Link>
          </li>
          <li>
            <Link to="/eliminarMascota">Eliminar mascota</Link>
          </li>
        </ul>
      </div>
      <div className="container-gestion-producto">
        <h2>Productos</h2>
        <img
          src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/2021-07/purina-bodegon-productos-pe.jpg"
          alt=""
        />
        <ul>
          <li>
            <Link to="/registrarProducto">Agregar producto</Link>
          </li>
          <li>
            <Link to="/editarProducto">Editar producto</Link>
          </li>
          <li>
            <Link to="/eliminarProducto">Eliminar producto</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { PageGestion };
