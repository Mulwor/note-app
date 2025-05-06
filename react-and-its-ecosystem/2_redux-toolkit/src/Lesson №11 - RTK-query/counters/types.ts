export type CounterState = {
  counter: number;
};

export type CounterId = string;

export type CountersState = Record<CounterId, CounterState | undefined>;
