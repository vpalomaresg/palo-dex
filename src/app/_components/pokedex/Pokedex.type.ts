import { Gen } from "@/app/_types/gen.type";

export type GridType = "regular" | "mini" | "table";
export type GenIndex =
  | [0, 99999]
  | [0, 151]
  | [152, 251]
  | [252, 386]
  | [387, 493]
  | [494, 649]
  | [650, 721]
  | [722, 809]
  | [810, 905]
  | [906, 1025];

export const defaultGenIndexFilter: GenIndex = [0, 99999];

export const genIndexMap: Record<Gen, GenIndex> = {
  "1": [0, 151],
  "2": [152, 251],
  "3": [252, 386],
  "4": [387, 493],
  "5": [494, 649],
  "6": [650, 721],
  "7": [722, 809],
  "8": [810, 905],
  "9": [906, 1025],
};
