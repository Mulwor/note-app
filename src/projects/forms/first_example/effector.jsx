import {createEffect, createStore, createEvent, sample} from 'effector'

export const submitted = createEvent();
export const setField = createEvent();

const sendFormFx = createEffect(params => {
  console.log(params)
})

// Работает как useState
export const $form = createStore({}).on(setField, (s, {key, value}) => ({
  ...s,
  [key]: value,
}))


// Объеденить стор с эффектом через евент. Когда сработает эвент, заюзаецца эффект и к нему примениться стор

sample({
  // Если clock не выполнется успешно, то sample будет вызывать на каждое улучшения saurce
  clock: submitted,
  source: $form,
  
  // Если target не выполнится успешно, то он создаст его и вернет значения из функции sample
  target: sendFormFx,
})
