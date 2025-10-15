import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // * На главную страницу
  const goHome = () => navigate('/', {replace: true})
  // * На одну страницу назад, другими словами, хотим вернутся на предыдущию страницу
  const goAnotherBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          {/* Good practice */}
          <button onClick={goAnotherBack}>Назад на предыдущию страницу</button> <br></br>
          {/* Bad practice */}
          <button onClick={goHome}>Домой</button>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};
