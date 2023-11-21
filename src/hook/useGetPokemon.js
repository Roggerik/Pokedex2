const useGetPokemon = async (url) => {

  let favorito = false
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      pokeId:data.id,
      pokeName: data.name,
      pokeImagen: data.sprites.front_default,
      pokeTipo: data.types[0].type.name,
      pokeType:data.types,
      pokeisFavorito: favorito
    };
  } catch (error) {
    console.error('Ocurrió un error al obtener las URLs:', error);
    return {
      pokeId:"",
      pokeName: "",
      pokeImagen: "",
    };
  }
};

export default useGetPokemon;