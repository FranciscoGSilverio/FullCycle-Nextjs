import api from "@/services/api";

export const getPlaceId = async (place: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const response = fetch(
    `${baseUrl}/places?text=centro, santa rita do sapucai`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);

      return data[0].place_id;
    });

  return response;
};
