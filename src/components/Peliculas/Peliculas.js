import React from 'react';
import "./Peliculas.css";
import { useState, useEffect} from "react";

function Peliculas() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("https://lucasmoy.dev/data/react/peliculas.json")
      .then((response) => response.json())
      .then((data) => setPeliculas(data));
  }, []);

  return (
    // PELICULAS
    <section id="peliculas">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="m-0">
          <i className="fas fa-film"></i> Peliculas
        </h1>
      </div>
      <div className="grid">
        {peliculas.map((pelicula) => {
          return (
            <div className="pelicula" key={pelicula.id}>
              <img
                className="poster"
                src={pelicula.img}
                alt={pelicula.titulo}
              />
              <div className="info">
                <p className="calificacion">
                  <i className="fas fa-star"></i> {pelicula.calificacion}
                </p>
                <p className="titulo">{pelicula.titulo}</p>
                <a href='/' className="boton-link">
                  Ver más
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Peliculas;
