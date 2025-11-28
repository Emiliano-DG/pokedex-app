import { Pokemon } from "@/types/pokemon";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

export default function PokemonCard({ id, name, types, imagen }: Pokemon) {
  return (
    <Link href={`/${id}`} asChild>
      <TouchableOpacity>
        <View
          style={[
            style.container,
            {
              shadowColor: typeColors[types[0].type.name],
              borderColor: typeColors[types[0].type.name],
              borderWidth: 2.5,
            },
          ]}
        >
          <Text style={style.name}>{name}</Text>
          <Text style={style.type}>{types[0].type.name}</Text>
          <View>
            {imagen && <Image source={{ uri: imagen }} style={style.image} />}
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    padding: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 12,
    gap: 8,
    backgroundColor: "#fafafa",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 14,
    marginBottom: 10,
    textTransform: "capitalize",
    opacity: 0.8,
  },

  image: {
    width: 120,
    height: 120,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
});
