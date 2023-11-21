const useUrl = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    return {
      pokemonUrls: data.results.map((pokemon) => pokemon.url),
      nextUrl: data.next,
      prevUrl: data.previous,
    };
  } catch (error) {
    console.error('Ocurrió un error al obtener las URLs:', error);
    return {
      pokemonUrls: [],
      nextUrl: null,
      prevUrl: null,
    };
  }
};

export default useUrl;