export const obj = {
  name: "Nik",
  age: 25,
};
type MYType = keyof typeof obj; // "name" |"age"
