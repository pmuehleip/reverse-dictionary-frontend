import React from "react";
import LinkedInButtonPNG from '../static/linkedin-icon.png'; 
import Image from 'react-bootstrap/Image';

export function LinkedInButton() {
  return (
    <a href="https://www.linkedin.com/in/paulmuehleip/">
      <Image height="30" alt="Add me on LinkedIn button" src={LinkedInButtonPNG}/>
    </a>
  );
}

export default LinkedInButton;