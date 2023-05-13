import React from 'react';
import Button from '../Button/Button';


const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }

  const NavBar = () => {
    return (
      <>
      <h1>BEST POST WEB</h1>
        <Button type="normal" size="l"onClick={scrollToBottom}>Go to "New Post"</Button>
      </>
    );
  };
  
  export default NavBar;