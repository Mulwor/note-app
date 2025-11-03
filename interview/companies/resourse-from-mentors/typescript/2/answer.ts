type MyPick<T, Keys extends keyof T> = {
  [k in Keys]: T[k];
};
