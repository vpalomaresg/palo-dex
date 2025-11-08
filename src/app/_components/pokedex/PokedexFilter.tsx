"use client";

import React, { useState } from "react";
import { Autocomplete, AutocompleteItem, Input } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import { PrimaryIconButton } from "../PrimaryIconButton";
import { BsFillGridFill, BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { MdFilterAlt, MdFilterAltOff } from "react-icons/md";
import { HiSparkles } from "react-icons/hi2";
import { IconType } from "react-icons";
import { Gen } from "@/app/_types/gen.type";
import { PokemonType } from "@/app/_types/pokemon.type";
import { GridType } from "./Pokedex.type";

type selectorItem<T> = {
  label: string;
  value: T;
};

const genSelectorItems: selectorItem<Gen>[] = [
  {
    label: "1ᵃ GEN",
    value: "1",
  },
  {
    label: "2ᵃ GEN",
    value: "2",
  },
  {
    label: "3ᵃ GEN",
    value: "3",
  },
  {
    label: "4ᵃ GEN",
    value: "4",
  },
  {
    label: "5ᵃ GEN",
    value: "5",
  },
  {
    label: "6ᵃ GEN",
    value: "6",
  },
  {
    label: "7ᵃ GEN",
    value: "7",
  },
  {
    label: "8ᵃ GEN",
    value: "8",
  },
  {
    label: "9ᵃ GEN",
    value: "9",
  },
];

const typeSelectorItems: selectorItem<PokemonType>[] = [
  { label: "Normal", value: PokemonType.Normal },
  { label: "Fuego", value: PokemonType.Fire },
  { label: "Agua", value: PokemonType.Water },
  { label: "Eléctrico", value: PokemonType.Electric },
  { label: "Planta", value: PokemonType.Grass },
  { label: "Hielo", value: PokemonType.Ice },
  { label: "Lucha", value: PokemonType.Fighting },
  { label: "Veneno", value: PokemonType.Poison },
  { label: "Tierra", value: PokemonType.Ground },
  { label: "Volador", value: PokemonType.Flying },
  { label: "Psíquico", value: PokemonType.Psychic },
  { label: "Bicho", value: PokemonType.Bug },
  { label: "Roca", value: PokemonType.Rock },
  { label: "Fantasma", value: PokemonType.Ghost },
  { label: "Dragón", value: PokemonType.Dragon },
  { label: "Siniestro", value: PokemonType.Dark },
  { label: "Acero", value: PokemonType.Steel },
  { label: "Hada", value: PokemonType.Fairy },
];

interface ListBoxFilterProps {
  placeholder: string;
  listItems: { label: string; value: any }[];
  setter: React.Dispatch<any>;
  defaultSelectedKey?: any;
}

const ListBoxFilter = ({
  placeholder,
  listItems,
  setter,
  defaultSelectedKey,
}: ListBoxFilterProps) => {
  return (
    <Autocomplete
      aria-label={`${placeholder} filter`}
      defaultItems={listItems}
      defaultSelectedKey={defaultSelectedKey}
      placeholder={placeholder}
      className="h-full w-full rounded-xl shadow-sm"
      classNames={{}}
      inputProps={{
        classNames: {
          input: "bg-content1 text-base",
          inputWrapper: "bg-content1 h-full",
        },
      }}
      listboxProps={{
        itemClasses: {
          title: "text-base",
        },
      }}
      variant="faded"
      size="md"
      radius="lg"
      disableAnimation
      onSelectionChange={(key) => {
        setter(key);
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.value} aria-label={item.label}>
          {item.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

interface PokedexFilterProps {
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  genFilter: Gen | null;
  setGenFilter: React.Dispatch<React.SetStateAction<Gen | null>>;
  type1Filter: PokemonType | null;
  setType1Filter: React.Dispatch<React.SetStateAction<PokemonType | null>>;
  type2Filter: PokemonType | null;
  setType2Filter: React.Dispatch<React.SetStateAction<PokemonType | null>>;
  gridType: GridType;
  setGridType: React.Dispatch<React.SetStateAction<GridType>>;
  showShiny: boolean;
  setShowShiny: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokedexFilter = ({
  searchString,
  setSearchString,
  genFilter,
  setGenFilter,
  type1Filter,
  setType1Filter,
  type2Filter,
  setType2Filter,
  gridType,
  setGridType,
  showShiny,
  setShowShiny,
}: PokedexFilterProps) => {
  const [isShowFilters, setIsShowFilters] = useState(false);
  const iconMap: Record<GridType, IconType> = {
    regular: BsGrid3X3GapFill,
    mini: BsFillGridFill,
    table: BsFillGridFill,
  };

  function toggleGrid() {
    if (gridType === "regular") {
      setGridType("mini");
    } else if (gridType === "mini") {
      setGridType("regular");
    }
  }

  return (
    <div className="flex w-full flex-col items-center gap-2 sm:gap-1 md:h-12 md:flex-row">
      <div className="flex h-14 w-full flex-grow items-center gap-1 md:max-w-2xl">
        {/* Search Bar */}
        <Input
          className="h-full w-full"
          classNames={{
            input: "bg-content1 text-base", // input
            inputWrapper: "bg-content1 shadow-md h-full", //outer wrapper
            innerWrapper: "bg-content1",
          }}
          type="search"
          variant="faded"
          placeholder="Buscar por nombre o número..."
          defaultValue={searchString}
          size="md"
          disableAnimation
          radius="lg"
          startContent={<FaSearch size={20} />}
          onChange={(event) => setSearchString(event.target.value)}
        />
        <PrimaryIconButton
          className="block aspect-square h-14 w-14 bg-content1 shadow-md md:hidden"
          size="lg"
          icon={isShowFilters ? MdFilterAltOff : MdFilterAlt}
          onPress={() => setIsShowFilters((prev) => !prev)}
          disableAnimation
        />
      </div>
      <div
        className={`flex h-full w-full flex-col items-center gap-1 sm:flex-row md:flex md:w-auto ${!isShowFilters && "hidden"}`}
      >
        <div className="flex h-14 w-full gap-1">
          {/* Types Filter */}
          <div className="h-full w-full min-w-40">
            <ListBoxFilter
              placeholder="Tipo 1"
              listItems={typeSelectorItems}
              defaultSelectedKey={type1Filter}
              setter={setType1Filter}
            />
          </div>
          <div className="h-full w-full min-w-40">
            <ListBoxFilter
              placeholder="Tipo 2"
              listItems={typeSelectorItems}
              defaultSelectedKey={type2Filter}
              setter={setType2Filter}
            />
          </div>
        </div>

        <div className="flex h-14 w-full items-center gap-1">
          {/* Gen Filter */}
          <div className="h-full w-full min-w-44">
            <ListBoxFilter
              placeholder="Generación"
              listItems={genSelectorItems}
              defaultSelectedKey={genFilter}
              setter={setGenFilter}
            />
          </div>
          {/* Shiny Toggle */}
          <div className="h-14 w-14">
            <PrimaryIconButton
              className={`h-14 w-14 bg-content1 p-1 shadow-sm ${showShiny && "border-solid border-yellow-400 text-yellow-400"}`}
              size="lg"
              fullWidth
              icon={HiSparkles}
              onClick={() => setShowShiny((prevState) => !prevState)}
              disableAnimation
            />
          </div>
          {/* Grid Layout Toggle */}
          <div className="h-14 w-14">
            <PrimaryIconButton
              className="h-14 w-14 bg-content1 p-1 shadow-sm"
              size="lg"
              fullWidth
              icon={iconMap[gridType]}
              onClick={toggleGrid}
              disableAnimation
            />
          </div>
        </div>
      </div>
    </div>
  );
};
