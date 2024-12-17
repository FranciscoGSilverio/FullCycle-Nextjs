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

  return response;
};
