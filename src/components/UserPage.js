import React from "react";
import { useParams } from "react-router-dom";

const UserPage = ({ posts }) => {
  const { id } = useParams();
  const filteredPosts = posts.filter((p) => p.author === `User${id}`);

  return (
    <div className="user-posts-page">
      <h2 className="section-title">User {id} Posts</h2>
      {filteredPosts.length === 0 ? (
        <p className="empty-state">No posts yet.</p>
      ) : (
        filteredPosts.map((post) => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <a href={`/posts/${post.id}`} className="button">
              View Post
            </a>
          </div>
        ))
      )}
      <a href="/users" className="back-link">← Back to Users</a>
    </div>
  );
};

export default UserPage;