import { createStore, createEvent, createEffect } from 'effector';

const event = createEvent(); // event has type Event<void> (default)
event();

const event0 = createEvent<number>();
event0(0);

const sendMessageFx = createEffect(async (params: { text: string }) => {
  // ! sendMessageFx has type Effect<{text: string}, string>
  return 'ok';
});

const sendWarningFx = createEffect<{ warn: string }, string>(async ({ warn }) => {
  // ! sendWarningFx has type Effect<{warn: string}, string>
  return 'ok';
});
