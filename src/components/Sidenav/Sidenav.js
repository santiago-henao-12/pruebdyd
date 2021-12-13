import React from 'react';
import "./Sidenav.css";

function Sidenav({ open, menuClickedFunction }) {
  return (
    /* Side menu */
    <nav id="menu-principal-sidenav" className={open ? "open" : ""}>
      <button
        id="boton-cerrar-menu"
        className="boton-icono"
        onClick={() => menuClickedFunction()}
      >
        <i className="fas fa-times"></i>
      </button>
      <ul>
        <li>
          <a href="/">
            <i className="fas fa-film"></i> Peliculas
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-tv"></i> Series
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-user-friends"></i> Actores
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-award"></i> Premios y Eventos
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidenav;
