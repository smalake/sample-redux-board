import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";

function App() {
  // 引数のstateは現在の「state」の状態（Developer Toolで確認もできる）
  const postList = useSelector((state) => state.posts.value);

  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const dispacth = useDispatch();

  const handleClick = () => {
    dispacth(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };
  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
      </div>
      <div className="addPost">
        <input
          type="text"
          placeholder="お名前"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="投稿内容"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button onClick={() => handleClick()}>投稿</button>
        <hr />
      </div>
      <div className="displayPosts">
        {postList.map((post) => (
          <div key={post.id} className="post">
            <h2 className="postName">{post.name}</h2>
            <h2 className="postContent">{post.content}</h2>
            <button
              onClick={() => {
                dispacth(deletePost({ id: post.id }));
              }}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
