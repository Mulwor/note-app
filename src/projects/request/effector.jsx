import {createEffect, createStore} from 'effector'

export const url = 'https://gist.githubusercontent.com/zerobias/24bc72aa8394157549e0b566ac5059a4/raw/b55eb74b06afd709e2d1d19f9703272b4d753386/data.json'

export const fetchUserFx = createEffect(url => (
    fetch(url).then(req => req.json())
))

// ! on - внутри можно писать функцию
export const $user = createStore(null)
    .on(fetchUserFx.doneData, (state, result) => result.username,
)
