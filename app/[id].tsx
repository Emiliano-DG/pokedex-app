import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { usePokemons } from "../hooks/usePokemon";
import { usePokemonSpecies } from "../hooks/usePokemonSpecies";

const typeColors: any = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
};

export default function details() {
  const { id } = useLocalSearchParams();
  const pokemonsId = Number(id);

  const { data: pokemons, isLoading, error } = usePokemons();

  const { data: species } = usePokemonSpecies(pokemonsId);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>{error.message}</Text>;

  const pokemon = pokemons?.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) return <Text>Pokemon not found</Text>;

  const bgcolor = typeColors[pokemon.types[0].type.name] ?? "gray";

  return (
    <ScrollView
      style={[
        style.container,
        { backgroundColor: typeColors[pokemon.types[0].type.name] + 20 },
      ]}
      contentContainerStyle={{ padding: 20, alignItems: "center" }}
    >
      {/* NOMBRE */}
      <Text style={style.name}>{pokemon.name}</Text>
      {/* TIPO */}
      <Text style={style.type}>{pokemon.types[0].type.name}</Text>
      {/* DESCRIPCION */}
      <Text>{species?.description}</Text>
      {/* HEIGHT */}
      <Text style={style.height}>Height: {pokemon.height / 10}m</Text>
      {/* WEIGHT */}
      <Text style={style.weight}>Weight: {pokemon.weight / 10}kg</Text>
      {/* ABILITIES */}
      <Text style={style.abilities}>
        Abilities: {pokemon.abilities[0].ability.name}
      </Text>

      {/* STATS */}
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>
        Stats
      </Text>

      {pokemon.stats.map((s) => (
        <View key={s.stat.name} style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16 }}>
            {s.stat.name}: {s.base_stat}
          </Text>

          {/* Barra */}
          <View
            style={{
              height: 8,
              backgroundColor: "#ffffff40",
              borderRadius: 10,
              overflow: "hidden",
              marginTop: 4,
            }}
          >
            <View
              style={{
                width: `${(s.base_stat / 150) * 100}%`,
                height: "100%",

                backgroundColor: typeColors[pokemon.types[0].type.name],
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 18,
    marginBottom: 10,
    textTransform: "capitalize",
    opacity: 0.8,
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    textTransform: "capitalize",
    opacity: 0.8,
    lineHeight: 22,
  },
  height: {
    fontSize: 18,
    marginTop: 20,
    textTransform: "capitalize",
    opacity: 0.8,
  },
  weight: {
    fontSize: 18,
    textTransform: "capitalize",
    opacity: 0.8,
  },
  abilities: {
    fontSize: 18,
    marginTop: 20,
    textTransform: "capitalize",
    opacity: 0.8,
    fontWeight: "bold",
  },
});
