const api = async (url, options) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  let headers = {
    "Content-Type": "application/json",
    credentials: "include",
  };

  if (options?.headers) {
    headers = {
      ...headers,
      ...options.headers,
    };
  }

  const config = {
    ...options,
    headers,
  };

  const res = await fetch(`${baseUrl}${url}`, config);

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res.json();
};

export default api;
