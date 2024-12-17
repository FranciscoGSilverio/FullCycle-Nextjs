"use client";

import { FC } from "react";
import { Flex, Heading, TextField, Strong } from "@radix-ui/themes";
import { useNewRoute } from "./useNewRoute";

import * as S from "./NewRouteContainer.styles";

export const NewRouteContainer: FC = () => {
  const {
    origin,
    setOrigin,
    destination,
    setDestination,
    calculateRoute,
    routeDistance,
    routeDuration,
    routeStartAddress,
    routeEndAddress,
    routeLoading,
    mapContainerRef,
  } = useNewRoute();
  return (
    <Flex direction={"row"} width={"100vw"} height={"100vh"}>
      <Flex direction={"column"} minWidth={"400px"} gapY={"5"} p={"5"}>
        <Heading as="h1">Nova rota</Heading>

        <S.StyledPlacesForm
          onSubmit={(e) => {
            e.preventDefault();
            calculateRoute();
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
            loading={routeLoading}
            color="red"
            variant="solid"
            type="submit"
            size={"3"}
          >
            Pesquisar
          </S.StyledSearchButton>
        </S.StyledPlacesForm>

        {routeStartAddress && routeEndAddress && (
          <S.InformationBox>
            <Flex direction="column" gapY={"2"}>
              <p>
                <Strong>Origem: </Strong> {routeStartAddress}
              </p>
              <p>
                <Strong>Destino: </Strong> {routeEndAddress}
              </p>
              <p>
                <Strong>Distânca: </Strong> {routeDistance}
              </p>
              <p>
                <Strong>Duração: </Strong> {routeDuration}
              </p>
            </Flex>
          </S.InformationBox>
        )}
      </Flex>
      <Flex
        direction={"column"}
        align={"center"}
        flexGrow={"1"}
        width={"100%"}
        height={"100%"}
      >
        <S.MapContainer ref={mapContainerRef} />
      </Flex>
    </Flex>
  );
};
