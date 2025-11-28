import { useQuery } from "@tanstack/react-query";
import { pokemonSpecies } from "../services/pokemonSpecies";

export const usePokemonSpecies = (id: number) => {
  return useQuery({
    queryKey: ["pokemon-species", id],
    queryFn: () => pokemonSpecies(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  });
};
