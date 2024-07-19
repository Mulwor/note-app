import { ChangeEvent, useState } from 'react';

export function MyCheckbox() {
  const [liked, setLiked] = useState<boolean>(true);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLiked(event.target.checked);
  }

  return (
    <div>
      <label>
        <input
          type='checkbox'
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>

      <p>You {liked ? 'liked' : 'did not like'} this.</p>

      <hr />
    </div>
  );
}
