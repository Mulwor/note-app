import { z } from "zod";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseUrl = "http://localhost:3000";

export const baseApi = createApi({
  // Проверяет то каким образом как апи будет запросы в наш ртк-квери
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({})
})

// const UserDtoSchema = z.object({
//   id: z.string(),
//   name: z.string(),
//   description: z.string().optional(),
// });

// export const api = {
//   getUsers: () => {
//     return fetch(`${baseUrl}/users`)
//     .then((response) => response.json())
//     .then((result) => {
//       return UserDtoSchema.array().parse(result);
//     });
//   },

//   getUser: (userId: string) => {
//     return fetch(`${baseUrl}/users/${userId}`)
//     .then((response) => response.json())    
//     .then((result) => {
//       return UserDtoSchema.parse(result);
//     });
//   },

//   deleteUser: (userId: string) => {
//     return fetch(`${baseUrl}/users/${userId}`, {
//       method: "DELETE",
//     }).then((response) => response.json());
//   },
// }