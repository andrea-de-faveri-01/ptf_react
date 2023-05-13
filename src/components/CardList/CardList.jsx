import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { getPosts } from "../../shared/api";
import NewPost from "../NewPost/NewPost";
import Loading from "../Loading/Loading";

function CardList() {
  
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setTimeout(async () => {
        const response = await getPosts();
        setCards(response.data);
        setIsLoading(false);
      }, 2000);
    }
    fetchData();
  }, []);

  const handleDeleteCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="card-list">
    
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          userId={card.userId}
          body={card.body}
          setCards={setCards}
          handleDeleteCard={handleDeleteCard}
        />
      ))}
      <NewPost setCards={setCards} />
    </div>
  );
}

export default CardList;
