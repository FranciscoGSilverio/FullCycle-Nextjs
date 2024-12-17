import api from "@/services/api";

export const createRoute = async (
  name: string,
  sourceId: string,
  destinationId: string
) => {
  const response = await api(`/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      source_id: sourceId,
      destination_id: destinationId,
    }),
  });

  let isSuccess = false;
  if (response.createdAt) {
    isSuccess = true;
  }

  return { ...response, isSuccess };
};
