import React, { useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = ({ posts, updatePost }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!post) return <div className="not-found">Post not found.</div>;

  const handleEdit = () => {
    setTitle(post.title);
    setContent(post.content);
    setEditing(true);
  };

  const handleSave = () => {
    updatePost({ ...post, title, content });
    setEditing(false);
  };

  return (
    <div className="post-detail-page">
      <div className="post">
        {editing ? (
          <div className="edit-form">
            <h2 className="section-title">Edit Post</h2>
            <input
              id="postTitle"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input"
            />
            <textarea
              id="postContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="form-textarea"
              rows={5}
            />
            <button className="button save-btn" onClick={handleSave}>
              Save Changes
            </button>
          </div>
        ) : (
          <>
            <span className="post-author-badge">{post.author}</span>
            <h2 className="post-detail-title">{post.title}</h2>
            <p className="post-detail-content">{post.content}</p>
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
          </>
        )}
      </div>
      <a href="/" className="back-link">← Back to Feed</a>
    </div>
  );
};

export default PostDetail;