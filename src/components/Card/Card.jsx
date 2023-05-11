import React from "react";
import "./Card.css";
import { deletePost } from "../../shared/api";
import Button from "../Button/Button";

const Card = ({ id, title, body, userId, handleDeleteCard}) => {
  const handleDeleteClick = async () => {
    await deletePost(id);
    handleDeleteCard(id);
  };

  return (
    <div className="card-container">
      <h2>{title}</h2>
      <p>{body}</p>
      <p>UserID: {userId}</p>
      <Button type="delete" size="s" onClick={handleDeleteClick}>X</Button>
    </div>
  );
};

export default Card;
