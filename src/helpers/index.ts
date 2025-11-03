// export const getdata = async (endpoint: string) => {
//   const res = await fetch(endpoint, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     next: { revalidate: 0 },
//   });
//   const data = await res.json();
//   return data;
// };
export const getdata = async (limit: number, skip: number) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      next: { revalidate: 0 }, // force dynamic
    }
  );

  const data = await res.json();
  return data;
};
