import { useEffect, useState } from "react";
import IconBuscar from '../assets/Icons/Varios/search.svg';
import useBuscarPokemon from "../hook/useBuscarPokemon.js";

export default function Buscar({ onBuscar }) {
  const [inputBuscar, setInputBuscar] = useState("");
  const [buscandoPokemon, setBuscandoPokemon] = useState({
    idBuscar: null,
    NameBuscar: null,
    ImagenBuscar: null,
    Tipobuscar: null,
    isFavoritoBuscar: null,
  });

  function handleBuscar(event) {
    event.preventDefault();
    setInputBuscar(event.target.value);
  }

  useEffect(() => {
    const fetchBuscando = async () => {
      const buscandoPokemon = await useBuscarPokemon(inputBuscar);
      setBuscandoPokemon(prevState => ({
        ...prevState,
        ...buscandoPokemon
      }));
    };

    fetchBuscando();
  }, [inputBuscar]);

  useEffect(() => {
    // Utilizar onBuscar directamente desde las propiedades del componente
    onBuscar(buscandoPokemon);
  }, [buscandoPokemon, onBuscar]);

  return (
    <>
      <div className="ContainerBuscar">
        <img src={IconBuscar} alt="" />
        <input className="inputBuscar" value={inputBuscar} type="text" placeholder="Busca tu Pókemon..." onChange={handleBuscar} />
      </div>
    </>
  );
}
