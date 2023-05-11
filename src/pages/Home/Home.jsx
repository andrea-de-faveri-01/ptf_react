import React from "react";
import "./Home.css";
import CardList from "../../components/CardList/CardList";

function Home({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="home">
      

      <h1>Posts</h1>
      <CardList posts={posts} />
    </div>
  );
}

export default Home;
