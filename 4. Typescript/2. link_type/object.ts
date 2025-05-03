let user: object = {
  name: "Alice",
  age: 25
};

// ! =======================================

interface Car {
  brand: string;
  year: number;
}

let myCar: Car = {
  brand: "Toyota",
  year: 2020
};

// ! =======================================

interface Address {
  city?: string;
  street?: string;
  coords: number[];
}

type User = {
  firstName: string;
  age?: number;
  address: Address;
}

const users: User = {
  address: {
    coords: [5, 6]
  },
  firstName: "Oleg"
}