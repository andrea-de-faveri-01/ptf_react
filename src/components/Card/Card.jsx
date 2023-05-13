import React from "react";
import "./Card.css";
import { deletePost } from "../../shared/api";
import MyButton from "../MyButton/MyButton";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function formatText(text) {
  return text
    .split('. ')
    .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1))
    .join('. ');
}

const Card = ({ id, title, body, userId, handleDeleteCard}) => {
  const handleDeleteClick = async () => {
    await deletePost(id);
    handleDeleteCard(id);
  };

  const formattedBody = formatText(body);
  const formattedTitle = formatText(title);

  return (
    
    <div className="card-container">
    <Accordion allowMultiple>
  <AccordionItem>
      <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
      {formattedTitle}
      </Box>
      <AccordionIcon />
      </AccordionButton>
      </h2>
      <div className="post-container">
      <AccordionPanel pb={4}>
      <div className="text-container">
      <p>{formattedBody}</p>
      <span className="id">User ID: {userId}</span>
      </div>
      <div className="btn-post">
      <MyButton style="delete" size="s" onClick={handleDeleteClick}><DeleteIcon boxSize={25}/></MyButton>
      </div>
      </AccordionPanel>
      </div>
  </AccordionItem>
  </Accordion>
    </div>
  
  );
};

export default Card;
