import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../services/pokemonService";

export const usePokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: getPokemons,
    staleTime: 1000 * 60 * 5,
  });
};
