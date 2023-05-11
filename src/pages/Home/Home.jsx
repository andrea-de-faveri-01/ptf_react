import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CardList from "../../components/CardList/CardList";

function Home({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="home">
      <button>
        <Link to="/newpost">New Post</Link>
      </button>

      <h1>Posts</h1>
      <CardList posts={posts} />
    </div>
  );
}

export default Home;
