import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./slices/postsSlice";

const PostP = () => {
    const posts = useSelector(selectAllPosts);
    // * Замена: const posts = useSelector((state) => state.posts);
  
    const renderedPosts = posts.map((post) => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
      </article>
    ));
  
    return (
      <section>
        <div>Второй файл поста</div>
        <h2>Posts</h2>
        {renderedPosts}
      </section>
    );
};

export default PostP;
