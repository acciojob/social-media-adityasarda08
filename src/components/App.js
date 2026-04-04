import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Notifications from "./Notifications";
import UserPage from "./UserPage";
import UsersList from "./UsersList";
import PostsList from "./PostsList";
import PostDetail from "./PostDetail";
import "../styles/App.css";

const initialPosts = [
  {
    id: "1",
    title: "First Post",
    content: "Hello world! This is the first post on GenZ.",
    author: "User1",
    reactions: { "👍": 4, "❤️": 2, "😂": 1, "😮": 0, "😢": 0 },
  },
  {
    id: "2",
    title: "Weekend Vibes",
    content: "Anyone else feeling the weekend energy? Let's goooo!",
    author: "User2",
    reactions: { "👍": 7, "❤️": 3, "😂": 5, "😮": 1, "😢": 0 },
  },
  {
    id: "3",
    title: "Tech Talk",
    content: "React Router v5 is actually pretty cool once you get the hang of it.",
    author: "User3",
    reactions: { "👍": 12, "❤️": 6, "😂": 0, "😮": 2, "😢": 0 },
  },
  {
    id: "4",
    title: "Morning Motivation",
    content: "Rise and grind! New day, new opportunities. Make it count.",
    author: "User1",
    reactions: { "👍": 3, "❤️": 8, "😂": 1, "😮": 0, "😢": 0 },
  },
];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  const updatePost = (updatedPost) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === updatedPost.id ? updatedPost : p))
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <h1>GenZ</h1>
          <nav className="top-bar">
            <Link to="/">Posts</Link>
            <Link to="/users">Users</Link>
            <Link to="/notifications">Notifications</Link>
          </nav>
        </header>

        <main className="main-content">
          <Switch>
            <Route exact path="/">
              <PostsList posts={posts} setPosts={setPosts} />
            </Route>
            <Route path="/users/:id">
              <UserPage posts={posts} />
            </Route>
            <Route exact path="/users">
              <UsersList />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/posts/:id">
              <PostDetail posts={posts} updatePost={updatePost} />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;