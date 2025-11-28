export interface Pokemon {
  id: number;
  name: string;
  imagen: string;
  imagenBack: string;
  types: Types[];
  height: number;
  weight: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface Types {
  type: {
    name: string;
  };
}
