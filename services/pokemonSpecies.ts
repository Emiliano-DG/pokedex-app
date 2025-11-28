interface FlavorEntry {
  flavor_text: string;
  language: { name: string };
}

export const pokemonSpecies = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  if (!res.ok) throw new Error("Failed to fetch pokemon");
  const data = await res.json();

  // Busco la descripción en inglés (o español si querés)
  const entry = data.flavor_text_entries.find(
    (e: FlavorEntry) => e.language.name === "en"
  );

  return {
    description:
      entry?.flavor_text.replace(/\n|\f/g, " ") ?? "No description available",
  };
};
