import PaloDex from "../_services/palo-pokedex-service";
import nationalDex from "../_services/national-pokedex-service";
import { IPokedexService } from "../_services/pokedex-service.interface";
import SeaglassPokedex from "../_services/seaglass-pokedex-service";
import { Game } from "../_types/game.type";

export const pokedexMap: Record<Game, IPokedexService> = {
  nacional: nationalDex,
  seaglass: SeaglassPokedex,
  palodex: PaloDex,
};
