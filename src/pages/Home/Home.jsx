import React from "react";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";

function Home({ posts, loading }) {
  if (loading) {
    return <Loading/>;
  }

  return (
    <div className="home">
      

      <h1>Posts</h1>
      <CardList posts={posts} />
    </div>
  );
}

export default Home;
