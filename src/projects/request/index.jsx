import React from 'react'
import { useStore, useEvent } from 'effector-react'
import { $user } from './effector';
import { url, fetchUserFx } from './effector';

export const Fetch = () => {
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
        onClick={() => fetchEvent(url)}> load user
      </button>
    </div>
  )
}