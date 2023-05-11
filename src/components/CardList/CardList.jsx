import React, { useState, useEffect } from "react";
import "./CardList.css";
import Card from "../Card/Card";
import { getPosts } from "../../shared/api";
import NewPost from "../NewPost/NewPost";

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPosts();

      setCards(response.data);
    }
    fetchData();
  }, []);

  const handleDeleteCard = (cardId) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
  };

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
