import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Establishment } from "../pages/Home";
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood/",
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Establishment[], void>({
      query: () => "restaurantes",
    }),
    getPerfil: builder.query<Establishment, string>({
      query: (id) => `restaurantes/${id}`,
    }),
  }),
});
export const { useGetHomeQuery, useGetPerfilQuery } = api;
export default api;
