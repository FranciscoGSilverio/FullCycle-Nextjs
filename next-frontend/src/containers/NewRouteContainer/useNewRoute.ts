import { useMap } from "@/hooks/useMap";
import { getDiretions } from "@/useCases/directions/getDirections";
import { getPlaceId } from "@/useCases/places/getPlaceId";
import { createRoute } from "@/useCases/routes/createRoute";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

export const useNewRoute = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const [routeStartAddress, setRouteStartAddress] = useState<string>("");
  const [routeEndAddress, setRouteEndAddress] = useState<string>("");
  const [routeDistance, setRouteDistance] = useState<string>("");
  const [routeDuration, setRouteDuration] = useState<string>("");
  const [directionsGeneralData, setDirectionsGeneralData] = useState<any>({});
  const [routeLoading, setRouteLoading] = useState<boolean>(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap(mapContainerRef);

  useEffect(() => {
    if (!map || !directionsGeneralData) return;
    if (!directionsGeneralData?.routes || !directionsGeneralData?.routes)
      return;
    map.removeAllRoutes();
    map.addRouteWithIcons({
      routeId: "1",
      startMarkerOptions: {
        position: directionsGeneralData?.routes[0]?.legs[0]?.start_location,
      },
      endMarkerOptions: {
        position: directionsGeneralData?.routes[0]?.legs[0]?.end_location,
      },
      carMarkerOptions: {
        position: directionsGeneralData?.routes[0]?.legs[0]?.start_location,
      },
    });
  }, [directionsGeneralData, map, routeStartAddress, routeEndAddress]);

  const calculateRoute = useCallback(async () => {
    setRouteLoading(true);
    const [originId, destinationId] = await Promise.all([
      getPlaceId(origin),
      getPlaceId(destination),
    ]);

    const { response, distance, duration, start_address, end_address } =
      await getDiretions(originId, destinationId);
    setDirectionsGeneralData(response);
    setRouteStartAddress(start_address);
    setRouteEndAddress(end_address);
    setRouteDistance(distance);
    setRouteDuration(duration);

    const routeName = `${origin} - ${destination}`;

    const { isSuccess } = await createRoute(routeName, originId, destinationId);
    if (isSuccess) {
      toast.success("Rota criada com sucesso");
    } else {
      toast.error("Erro ao criar a rota");
    }

    setRouteLoading(false);
  }, [origin, destination]);

  return {
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
  };
};
