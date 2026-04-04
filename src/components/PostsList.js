import React, { useState } from "react";
import { Link } from "react-router-dom";

const REACTIONS = ["👍", "❤️", "😂", "😮", "😢"];

const users = [
  { id: "1", name: "User1" },
  { id: "2", name: "User2" },
  { id: "3", name: "User3" },
];

const PostsList = ({ posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author || !content.trim()) return;
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      author,
      reactions: { "👍": 0, "❤️": 0, "😂": 0, "😮": 0, "😢": 0 },
    };
    setPosts((prev) => [prev[0], newPost, ...prev.slice(1)]);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  const handleReaction = (postId, emoji, index) => {
    if (index === 4) return; // 5th button never changes
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? { ...p, reactions: { ...p.reactions, [emoji]: p.reactions[emoji] + 1 } }
          : p
      )
    );
  };

  return (
    <div className="posts-page">
      <section className="create-post-section">
        <h2 className="section-title">Create Post</h2>
        <form className="create-post-form" onSubmit={handleSubmit}>
          <input
            id="postTitle"
            type="text"
            placeholder="Post title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
          />
          <select
            id="postAuthor"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="form-select"
          >
            <option value="">Select Author</option>
            {users.map((u) => (
              <option key={u.id} value={u.name}>
                {u.name}
              </option>
            ))}
          </select>
          <textarea
            id="postContent"
            placeholder="What's on your mind?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-textarea"
            rows={3}
          />
          <button type="submit" className="button submit-btn">
            Post It
          </button>
        </form>
      </section>

      <section className="feed-section">
        <h2 className="section-title">Feed</h2>
        <div className="posts-list">
          {posts.map((post) => (
            <article key={post.id} className="post-card">
              <div className="post-card-header">
                <span className="post-author">{post.author}</span>
              </div>
              <h3 className="post-card-title">{post.title}</h3>
              <p className="post-card-content">{post.content}</p>
              <div className="post-reactions">
                {REACTIONS.map((emoji, i) => (
                  <button
                    key={emoji}
                    className="reaction-btn"
                    onClick={() => handleReaction(post.id, emoji, i)}
                  >
                    {emoji} <span>{post.reactions[emoji]}</span>
                  </button>
                ))}
              </div>
              <Link to={`/posts/${post.id}`} className="button view-btn">
                View Post
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostsList;