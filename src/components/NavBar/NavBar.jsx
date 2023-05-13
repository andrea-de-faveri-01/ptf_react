import React from "react";
import MyButton from "../MyButton/MyButton";
import "./NavBar.css";
import { ArrowDownIcon } from "@chakra-ui/icons";

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const NavBar = () => {
  return (
    <>
      <h1>BEST POST WEB</h1>
      <div className="btn-container">
        <MyButton
          style="normal"
          size="l"
          position="right"
          onClick={scrollToBottom}
        >
          Go to "New Post" <ArrowDownIcon boxSize={20}/>
        </MyButton>
      </div>
    
    </>
  );
};

export default NavBar;
