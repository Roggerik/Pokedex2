const useBuscarPokemon = async (nombre) => {
  let favorito = false
  if(nombre!=""){
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
      const data = await response.json();
    
      if(data =="") return
      return {
        idBuscar:data.id,
        NameBuscar: data.name,
        ImagenBuscar: data.sprites.front_default,
        TipoBuscar: data.types[0].type.name,
        TypeBuscar:data.types,
        isFavoritoBuscar: favorito
      };
    } catch (error) {
      console.error('Ocurrió un error al obtener las URLs:', nombre,error);
      return {
        idBuscar:"",
        nameBuscar: "",
      };
    }
  }
  
};

export default useBuscarPokemon;