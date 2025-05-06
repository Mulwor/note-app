interface Person {
  name: string;
  address?: {
    street: string;
  };
  getAge?: () => number;
  array?: string[];
};

const person: Person = {
  name: "Oleg"
}

function prepareUser (user: Person) {
  // ! user.address.street       // 'user.address' is possibly 'undefined'.ts
  user.address?.street    

  // ! user.getAge();            // Cannot invoke an object which is possibly 'undefined'
  user.getAge?.()

  // ! user.array[0]               // 'user.array' is possibly 'undefined'.
  user.array?.[0]
}