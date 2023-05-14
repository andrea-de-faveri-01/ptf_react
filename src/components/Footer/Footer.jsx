import React from "react";
import "./Footer.css";
import Button from "../MyButton/MyButton";
import { ArrowUpIcon } from "@chakra-ui/icons";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <>
      <div className="btn-container">
        <Button style="normal" onClick={scrollToTop}>
          Go up <ArrowUpIcon boxSize={20} />
        </Button>
      </div>
    </>
  );
};

export default Footer;
