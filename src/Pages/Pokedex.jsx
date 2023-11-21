import CardPokemon from "../components/CardPokemon.jsx";
import React, { useEffect, useState } from "react";
import useUrl from "../hook/useUrl.js";
import useGetPokemon from "../hook/useGetPokemon.js";

import Buscar from '../components/Buscar.jsx'
import "../styles/PagePokedex.css";

const Pokedex = () => {
  const [pokemonUrl, setPokemonUrl] = useState({
    pokemonUrls: [],
    nextUrl: null,
    prevUrl: null,
  });
  const [pokemons, setPokemons] = useState([]); // Cambiado a un array
  const [pokemonBuscar, setPokemonBuscar] = useState(''); 

  const valorBuscar = (valor) => {
    setPokemonBuscar(valor)
    //console.log("valor encontrado:",pokemonBuscar)
  }

  useEffect(() => {
    const fetchUrl = async () => {
      const data = await useUrl("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0");
      setPokemonUrl(data);
    };

    fetchUrl();
  }, []);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonData = await Promise.all(
        pokemonUrl.pokemonUrls.map(async (url) => {
          return await useGetPokemon(url);
        })
      );
      setPokemons(pokemonData);
    };

    fetchPokemons();
  }, [pokemonUrl.pokemonUrls]);

  

  console.log(pokemons);

  return (
    <>
      <div className="ContainerPagePokedex">
  <div className="ContainerBusqueda">
    <Buscar onBuscar = {valorBuscar}/>
  </div>

  <div className="ContainerPokedex">
    {
      pokemonBuscar.idBuscar     
      ?
        <CardPokemon
          key={pokemonBuscar.idBuscar} // Asegúrate de proporcionar una clave única
          id={pokemonBuscar.idBuscar}
          name={pokemonBuscar.NameBuscar}
          imagen={pokemonBuscar.ImagenBuscar}
          tipo={pokemonBuscar.TipoBuscar}
          tiposPokemon={pokemonBuscar.TypeBuscar}
          isFavorito={pokemonBuscar.isFavoritoBuscar}
        />
      :
        pokemons.map((pokemon) => (
          <CardPokemon
            key={pokemon.pokeId} // Asegúrate de proporcionar una clave única
            id={pokemon.pokeId}
            name={pokemon.pokeName}
            imagen={pokemon.pokeImagen}
            tipo={pokemon.pokeTipo}
            tiposPokemon={pokemon.pokeType}
            isFavorito={pokemon.pokeisFavorito}
          />
        ))
    }
  </div>
</div>
    </>
  );
};

export default Pokedex;
