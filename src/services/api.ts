import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Types
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Fake data
const FAKE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: 999,
    description: "Điện thoại cao cấp từ Apple",
  },
  {
    id: 2,
    name: "Samsung S23",
    price: 899,
    description: "Flagship Android mới nhất",
  },
  {
    id: 3,
    name: "iPad Air",
    price: 599,
    description: "Máy tính bảng phổ thông",
  },
];

// Tạo một biến để lưu trữ data thay vì dùng trực tiếp FAKE_PRODUCTS
let products = [...FAKE_PRODUCTS];

// Tạo API slice với RTK Query
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    // Get all products
    getProducts: builder.query<Product[], void>({
      queryFn: () => {
        // Giả lập delay network
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ data: products });
          }, 1000);
        });
      },
      providesTags: ["Product"],
    }),

    //delete product
    deleteProduct: builder.mutation<Product[], number>({
      queryFn: (id) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            // Cập nhật products với mảng mới đã lọc
            products = products.filter((product) => product.id !== id);
            resolve({ data: products });
          }, 1000);
        });
      },
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useDeleteProductMutation } = apiSlice;
