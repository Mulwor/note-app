// obj - это обьект, key - ключ, который должен быть только ключом, который есть в этом обьекте
// нужно типизировать

const getObjField = (obj, key) => {
  return obj[key];
};

/**
   Типизировать функцию, чтобы она могла принимать только обьекты с полем length
  */

const getLength = (data) => {
  return data.length;
};

getLength([1, 2, 3]); // ok
getLength({ length: 777 }); // ok
getLength({ key: 1 }); // error
