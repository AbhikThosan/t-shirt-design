import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  import.meta.env.MODE === "production"
    ? "https://api.razzakfashion.com" 
    : "/api"; 

export const apiOrdersSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getOrdersData: builder.query({
      query: ({ search = "", page = 1 }) => {
        if (!search) {
          return `/?page=${page}`;
        }
        return `/?paginate=10&page=${page}&search=${search}`;
      },
    }),
  }),
});

export const { useGetOrdersDataQuery } = apiOrdersSlice;
