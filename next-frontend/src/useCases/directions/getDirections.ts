import api from "@/services/api";

export const getDiretions = async (originId: string, destinationId: string) => {
  const response = await api(
    `/directions?originId=${originId}&destinationId=${destinationId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const start_address = response?.routes[0]?.legs[0]?.start_address || "";
  const end_address = response?.routes[0]?.legs[0]?.end_address || "";
  const distance = response?.routes[0]?.legs[0]?.distance?.text || "";
  const duration = response?.routes[0]?.legs[0]?.duration?.text || "";

  return { ...response, distance, duration, start_address, end_address };
};
