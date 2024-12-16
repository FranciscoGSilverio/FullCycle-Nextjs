import { getPlaceId } from "@/useCases/places/getPlaceId";
import { useCallback, useState } from "react";

export const useNewRoute = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const [originId, setOriginId] = useState<string>("");
  const [destinationId, setDestinationId] = useState<string>("");

  console.log("originId", originId);
  console.log("destinationId", destinationId);

  const fetchPlaceIds = useCallback(async () => {
    const [originId, destinationId] = await Promise.all([
      getPlaceId(origin),
      getPlaceId(destination),
    ]);

    setOriginId(originId);
    setDestinationId(destinationId);
  }, [origin, destination]);

  return { origin, setOrigin, destination, setDestination, fetchPlaceIds };
};
