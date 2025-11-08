import { PokemonType } from "../_types/pokemon.type";

const typeColors: Record<PokemonType, string> = {
  [PokemonType.Normal]: "#9fa19f",
  [PokemonType.Fire]: "#e62829",
  [PokemonType.Water]: "#2980ef",
  [PokemonType.Eléctrico]: "#fac000",
  [PokemonType.Grass]: "#3fa129",
  [PokemonType.Ice]: "#3fd8ff",
  [PokemonType.Fighting]: "#ff8000",
  [PokemonType.Poison]: "#8f41cb",
  [PokemonType.Ground]: "#915121",
  [PokemonType.Flying]: "#81b9ef",
  [PokemonType.Psychic]: "#ef4179",
  [PokemonType.Bug]: "#91a119",
  [PokemonType.Rock]: "#afa981",
  [PokemonType.Ghost]: "#704170",
  [PokemonType.Dragon]: "#5061e1",
  [PokemonType.Dark]: "#50413f",
  [PokemonType.Steel]: "#60a1b8",
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
