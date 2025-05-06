import React, { useEffect, useState } from 'react';

export const FetchTask = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <ul>
      {users.map((obj) => (
        <li key={obj.id}>obj.name</li>
      ))}
    </ul>
  );
};
