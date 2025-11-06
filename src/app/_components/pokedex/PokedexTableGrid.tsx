import { PokemonSimpleData } from "@/app/_services/models/PokemonSimpleData";
import { Game } from "@/app/_types/game.type";

interface PokedexTableGridProps {
  pokemonData: PokemonSimpleData[];
  showPokemons: number;
  showShiny: boolean;
  game: Game;
}
