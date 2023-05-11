import React from 'react';
import Button from '../Button/Button';


const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const Footer = () => {
    return (
      <>
        <Button type="normal" onClick={scrollToTop}>Go up</Button>
      </>
    );
  };
  
  export default Footer;