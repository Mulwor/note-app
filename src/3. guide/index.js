import { createStore } from "effector"

// 1. Нейминг

// Store необхадимо оборачивать в $
const $user = createStore({})

// Effect - Добавлять в конце Fx
const fetchUserFx = createEffect(async () => {
    const res = await fetch('my pretty url')
    return res.json()
})

// Event => На этот счет нет никаких реальных предпочтительных правил. 
// Но предложение состоит в том, чтобы называть события, которые напрямую 
// запускают обновления хранилища, как это уже делалось в прошлом.
const emailChanged = createEvent()
$user.on(emailChanged, (state, email) => {
  //...state,
  email
})