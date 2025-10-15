export type CounterState = {
  counter: number;
};

export type CounterId = string;

export type State = {
  counters: Record<CounterId, CounterState | undefined>
}

export type IncrementAction = {
  type: "increment";
  payload: {
    counterId: CounterId,
  }
};

export type DecrementAction = {
  type: "decrement";
  payload: {
    counterId: CounterId,
  }
};

export type Action = IncrementAction | DecrementAction;