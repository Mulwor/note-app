export type State = {
  counter: number;
};

export type IncrementAction = {
  type: "increment";
};

export type DecrementAction = {
  type: "decrement";
};

export type Action = IncrementAction | DecrementAction;