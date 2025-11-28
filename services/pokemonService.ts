import { Pokemon } from "../types/pokemon";

export const getPokemons = async (): Promise<Pokemon[]> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();

  const detailsPokemons = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const response = await fetch(pokemon.url);
      const details = await response.json();
      return {
        id: details.id,
        name: details.name,
        imagen: `https://img.pokemondb.net/artwork/large/${details.name}.jpg`,
        types: details.types,
        height: details.height,
        weight: details.weight,
        abilities: details.abilities,
        stats: details.stats,
      };
    })
  );
  return detailsPokemons;
};
