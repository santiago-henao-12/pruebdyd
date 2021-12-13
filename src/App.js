import "./App.css";
import Peliculas from "./components/Peliculas/Peliculas";
import Header from "./components/Header/Header";
import Sidenav from "./components/Sidenav/Sidenav";
import { useState } from "react";
import React from 'react';

function App() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenuLateral = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <>
      <Sidenav
        open={menuAbierto}
        menuClickedFunction={toggleMenuLateral}
      ></Sidenav>
      <Header menuClickedFunction={toggleMenuLateral}></Header>
      <main className="container pt-5">
          <Peliculas />
      </main>
    </>
  );
}

export default App;
