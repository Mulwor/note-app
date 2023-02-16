import React from "react";
import { createEffect, forward } from 'effector';
import { createGate, useGate, useStore } from "effector-react";

// ! 1. Создаем эффектор
const myVerySideEffectFx = createEffect()

// ! use - функцию, которая будет вызвана при срабатывании
myVerySideEffectFx.use(async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  await promise;
});


// ! 2. Создаем так называемые ворота для будущей отправки реквизит (данных)
const SampleCompGate = createGate();

// ! Отправка обновления с одного набора устройсв (места) на другой
forward({
  // ! open - cобытие, которое будет вызвано во время установки "ворот"
  from: SampleCompGate.open,       
  to: myVerySideEffectFx,
});

// ! done - Событие , которое срабатывает приразрешении обработчика. 
// ! watch - позволяет смотреть за событием. Необходимо использовать их вместе
myVerySideEffectFx.done.watch(() => console.log(' iam done'));



const Loading = () => {
    <div>I am loading huh?</div>;
}

const ProfileForm = () => (
  <form>
    <input type="text" placeholder="my little input" />
    <input type="submit" />
  </form>
);

export const SampleComp = () => {
  // ! 3. Хук который обращается к Gate
  useGate(SampleCompGate); 
  
  // ! 4. Реакт-хук, который подписывается на стор и возвращает его текущее 
  // ! значение, поэтому при обновлении стора, компонент также будет 
  // ! автоматически обновлён. Pending - стор, который показывает, что
  // ! эффект находится в процессе выполнения
  const loading = useStore(myVerySideEffectFx.pending);
  console.log(loading);
  
  return loading ? <Loading /> : <ProfileForm />;
};
