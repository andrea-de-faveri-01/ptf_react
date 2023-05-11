import React from "react";
import "./Card.css";
import { deletePost } from "../../shared/api";

const Card = ({ id, title, body, userId, handleDeleteCard }) => {
  const handleDeleteClick = async () => {
    await deletePost(id);
    handleDeleteCard(id);
  };

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>UserID: {userId}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default Card;
