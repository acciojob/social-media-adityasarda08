import React, { useState } from "react";

const AddPostForm = ({ setPosts }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title || !author || !content) return;

    setPosts(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        author,
        content,
        reactions: [0, 0, 0, 0, 0]
      }
    ]);

    setTitle("");
    setAuthor("");
    setContent("");
  };

  return (
    <div>
      <label htmlFor="postTitle">Post Title</label>
      <input id="postTitle" value={title} onChange={e => setTitle(e.target.value)} />

      <label htmlFor="postAuthor">Author</label>
      <select id="postAuthor" value={author} onChange={e => setAuthor(e.target.value)}>
        <option value="">Select Author</option>
        <option value="User1">User1</option>
        <option value="User2">User2</option>
        <option value="User3">User3</option>
      </select>

      <label htmlFor="postContent">Post Content</label>
      <textarea id="postContent" value={content} onChange={e => setContent(e.target.value)} />

      <button onClick={handleSubmit}>
        Add Post
      </button>
    </div>
  );
};

export default AddPostForm;