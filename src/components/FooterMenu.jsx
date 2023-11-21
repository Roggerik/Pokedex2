import "../styles/FooterApp.css";
import React, {useState } from "react";
import { Link } from "react-router-dom";
import Pokedex from "../assets/Icons/Footer/Pokedex.svg";
import PokedexActive from "../assets/Icons/Footer/PokedexActive.svg";
import Favoritos from "../assets/Icons/Footer/Favoritos.svg";
import FavoritosActive from "../assets/Icons/Footer/FavoritosActive.svg";

function FooterApp() {
  const [pokedex, SetPokedex] = useState(true);
  const [favoritos, SetFavoritos] = useState(false);

  const PokedexIcon = () => {
    SetPokedex(true);
    SetFavoritos(false);
  };

  const FavoritosIcon = () => {
    SetPokedex(false);
    SetFavoritos(true);
  };

  return (
    <div className="ContainerFooter">
      <Link to="/">
        <div className="ContainerIconFooter" onClick={PokedexIcon}>
          {pokedex ? (
            <img id="IconCative" src={PokedexActive} alt="" />
          ) : (
            <img id="IconInactiveFooter" src={Pokedex} alt="" />
          )}
        </div>
      </Link>

      <Link to="/Favoritos">
        <div className="ContainerIconFooter" onClick={FavoritosIcon}>
          {favoritos ? (
            <img id="IconCative" src={FavoritosActive} alt="" />
          ) : (
            <img id="IconInactiveFooter" src={Favoritos} alt="" />
          )}
        </div>
      </Link>
    </div>
  );
}

export default FooterApp;
