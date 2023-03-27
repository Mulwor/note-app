import React from "react";
import Post from "./Posts/Post";
import PostP from "./Posts/PostP";
import AddPostForm from "./Posts/components/AddPostForm";
// import Counter from "./Counter/Counter";
// import CounterPlus from "./Counter/Counter+";

function App() {
  return (
    <div>
      {/* Первое */}
      {/* <Post />  */}

      {/* Второе */}
      <AddPostForm />
      <PostP />
    </div>
  )
}

export default App;
