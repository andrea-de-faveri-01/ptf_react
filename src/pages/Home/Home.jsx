import React from "react";
import "./Home.css";
import CardList from "../../components/CardList/CardList";
import Loading from "../../components/Loading/Loading";

const Home = ({ posts, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="home">
      <h2>Posts:</h2>
      <CardList posts={posts} />
    </div>
  );
}

export default Home;
