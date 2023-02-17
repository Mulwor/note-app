import { createEffect } from "effector";
import { createGate } from "effector-react";
import { forward } from "effector";

export const myVerySideEffectFx = createEffect();

// ! Функция, которая будет вызываться при клике
myVerySideEffectFx.use(async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  await promise;
});


export const SampleCompGate = createGate(); 
forward({
  // Cобытие, которое будет вызвана при установке 
  from: SampleCompGate.open, 
  to: myVerySideEffectFx,
});

myVerySideEffectFx.done.watch(() => console.log(' iam done'));
