import React from "react";
import BuyMeACoffeeButtonPNG from '../static/bmc-button.png'; 
import Image from 'react-bootstrap/Image';

export function BuyMeACoffeeButton() {
  return (
    <a href="https://www.buymeacoffee.com/pmuehleip">
      <Image height="50" alt="Buy Me a Coffee Button" src={BuyMeACoffeeButtonPNG}/>
    </a>
  );
}

export default BuyMeACoffeeButton;