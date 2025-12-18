import { z } from "zod";
const baseUrl = "http://localhost:3000";

// ? Нужен для валидации данных, которые приходят с сервера
// ? Грубо говоря он необходим нам для проверки типов. Если
// ? его не будет, то везде будет возвращать any
const UserDtoSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
});

export const api = {
  getUsers: () => {
    return fetch(`${baseUrl}/users`)
    .then((response) => response.json())
    .then((result) => {
      // ? Мы сделали схему массива - UserDtoSchema и сделали метод
      // ? parse, который проверяет соответствует-ли данные к схеме.
      // ? И если соответствует, то он пропускает наружу уже типизиро-
      // ? ванные значения
      return UserDtoSchema.array().parse(result);
    });
  },

  getUser: (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`)
    .then((response) => response.json())    
    .then((result) => {
      return UserDtoSchema.parse(result);
    });
  },

  deleteUser: (userId: string) => {
    return fetch(`${baseUrl}/users/${userId}`, {
      method: "DELETE",
    }).then((response) => response.json());
  },
}