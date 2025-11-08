import { PokemonType } from "../_types/pokemon.type";

const typeColors: Record<PokemonType, string> = {
  [PokemonType.Normal]: "#9fa19f",
  [PokemonType.Fuego]: "#e62829",
  [PokemonType.Agua]: "#2980ef",
  [PokemonType.Eléctrico]: "#fac000",
  [PokemonType.Planta]: "#3fa129",
  [PokemonType.Hielo]: "#3fd8ff",
  [PokemonType.Lucha]: "#ff8000",
  [PokemonType.Veneno]: "#8f41cb",
  [PokemonType.Tierra]: "#915121",
  [PokemonType.Volador]: "#81b9ef",
  [PokemonType.Psíquico]: "#ef4179",
  [PokemonType.Bicho]: "#91a119",
  [PokemonType.Roca]: "#afa981",
  [PokemonType.Fantasma]: "#704170",
  [PokemonType.Dragón]: "#5061e1",
  [PokemonType.Siniestro]: "#50413f",
  [PokemonType.Acero]: "#60a1b8",
  [PokemonType.Hada]: "#ef71ef",
};

export function getPokemonTypeColor(type: string): string {
  const normalizedType = type.toLowerCase() as PokemonType;

  if (Object.values(PokemonType).includes(normalizedType)) {
    return typeColors[normalizedType];
  } else {
    return "#808080";
  }
}
