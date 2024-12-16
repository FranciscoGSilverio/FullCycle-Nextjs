"use client";

import { FC } from "react";
import { Flex, Heading, TextField, Strong } from "@radix-ui/themes";
import { useNewRoute } from "./useNewRoute";

import * as S from "./NewRouteContainer.styles";

export const NewRouteContainer: FC = () => {
  const { origin, setOrigin, destination, setDestination, fetchPlaceIds } =
    useNewRoute();
  return (
    <Flex direction={"row"} width={"100vw"} height={"100vh"}>
      <Flex direction={"column"} minWidth={"400px"} gapY={"5"} p={"5"}>
        <Heading as="h1">Nova rota</Heading>

        <S.StyledPlacesForm
          onSubmit={(e) => {
            e.preventDefault();
            fetchPlaceIds();
          }}
        >
          <TextField.Root
            size={"3"}
            placeholder="Origem"
            onChange={(event) => {
              setOrigin(event.target.value);
            }}
            value={origin}
          />
          <TextField.Root
            size={"3"}
            placeholder="Destino"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
          />
          <S.StyledSearchButton
            color="red"
            variant="solid"
            type="submit"
            size={"3"}
          >
            Pesquisar
          </S.StyledSearchButton>
        </S.StyledPlacesForm>

        <S.InformationBox>
          <Flex direction="column" gapY={"2"}>
            <p>
              <Strong>Origem: </Strong> element.
            </p>
            <p>
              <Strong>Destino: </Strong> element.
            </p>
            <p>
              <Strong>Distânca: </Strong> element.
            </p>
            <p>
              <Strong>Duração: </Strong> element.
            </p>
          </Flex>
        </S.InformationBox>
      </Flex>
      <Flex direction={"column"} align={"center"} flexGrow={"1"}>
        <Heading as="h1">Map</Heading>
      </Flex>
    </Flex>
  );
};
