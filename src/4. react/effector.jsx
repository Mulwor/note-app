import React from 'react'
import {createEffect, createStore} from 'effector'
import {useStore,useEvent} from 'effector-react'

const url = 'https://gist.githubusercontent.com/zerobias/24bc72aa8394157549e0b566ac5059a4/raw/b55eb74b06afd709e2d1d19f9703272b4d753386/data.json'

const fetchUserFx = createEffect(url => (
    fetch(url)
        .then(req => req.json())
    )
)

const $user = createStore(null).on(
    // doneDataэто событие, которое срабатывает при effectуспешном разрешении с помощью resultfrom.done
    fetchUserFx.doneData, (state, result) => result.username,
)


export const Effectors = () => {
  const user = useStore($user);
  const pending = useStore(fetchUserFx.pending);
  const fetchEvent = useEvent(fetchUserFx);

  return (
    <div>
      {user 
        ? <div>current user: {user}</div> 
        : <div>no current user</div>}
      
      <button 
        disable={pending} 
        onClick={() => fetchEvent(url)}>
            load user
      </button>
    </div>
  )
}