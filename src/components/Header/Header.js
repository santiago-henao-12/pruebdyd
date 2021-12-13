import React from 'react';
import "./Header.css";

function Header({ menuClickedFunction }) {

  return (
    /* CABECERA */
    <header id="cabecera">
      <div className="contenedor">
        <button
          id="boton-menu-principal"
          className="boton-icono"
          onClick={() => menuClickedFunction()}
        >
          <i className="fas fa-bars"></i>
        </button>
        <a href="/" className="logo">
          Movies
        </a>
      </div>
    </header>
  );
}

export default Header;
