import api from "@/services/api";

export const getPlaceId = async (place: string) => {
  const response = await api(`/places?text=${place}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const place_id = response?.candidates[0]?.place_id || "";
  return place_id;
};
