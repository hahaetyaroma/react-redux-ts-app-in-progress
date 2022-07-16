import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "./productTypes";

export const productApi = createApi({
  reducerPath: "api/products",
  baseQuery: fetchBaseQuery({ baseUrl: "http://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProduct[], number>({
      query: (limit = 5) => `products?${limit}`,
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
