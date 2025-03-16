import React, { useEffect, useState } from 'react';

interface PostFetch {
  id: number;
  title: string;
}

export const Post = () => {
  const [posts, setPosts] = useState<PostFetch[]>([]);

  useEffect(() => {
    // Нужен для размонтирования
    let cancelled = false;

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        if (cancelled) {
          setPosts(data);
        }
      });

    return () => {
      cancelled = true;
    };
  });

  return <div>{posts?.map((p) => <p key={p.id}>{p.title}</p>)}</div>;
};
