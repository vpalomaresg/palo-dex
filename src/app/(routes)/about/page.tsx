"use client";

import { Card, CardBody, Image, Link } from "@heroui/react";
import pokeball from "@/app/_assets/pokeball.png";

// Static strings
const ABOUT_TITLE = "Acerca de";
const ABOUT_DESCRIPTION = `Esta aplicación tiene como objetivo proporcionar un espacio seguro y fácil de usar para buscar en la Pokédex, cubriendo tanto los juegos principales de la serie Pokémon como los ROM hacks, con una interfaz de usuario moderna e intuitiva diseñada tanto para ordenadores como para dispositivos móviles.`;
const ABOUT_POKEAPI_TEXT = "Los datos de Pokémon de la serie principal están proporcionados por";
const PRIVACY_TITLE = "Privacidad";
const PRIVACY_DESCRIPTION = `Pokémon y todos los nombres respectivos son marcas comerciales y © de Nintendo 1996-2025.`;

export default function About() {
  return (
    <div className="max-w-screen min-h-[calc(100dvh-var(--navbar-height))] mb-8">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center text-center">
          <Image
            src={pokeball.src}
            alt="PokéBall"
            className="mt-8 max-h-[30vh] lg:max-h-[50vh]"
          />

        <div className="z-10 mt-8 px-6 py-2 text-foreground">
          {/* About Section */}
          <Card className="mb-8">
            <CardBody>
              <h2 className="mb-4 text-3xl font-bold">{ABOUT_TITLE}</h2>
              <p className="mb-4 text-lg text-justify">
                {ABOUT_DESCRIPTION}{" "}
                <p>
                  {ABOUT_POKEAPI_TEXT}{" "}
                  <Link href="https://pokeapi.co/" color="primary">
                    PokeAPI
                  </Link>
                  .
                </p>
              </p>
            </CardBody>
          </Card>

          {/* Privacy Section */}
          <Card>
            <CardBody>
              <h2 className="mb-4 text-3xl font-bold">{PRIVACY_TITLE}</h2>
              <p className="mb-4 text-lg text-justify">{PRIVACY_DESCRIPTION}</p>
            </CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
}
