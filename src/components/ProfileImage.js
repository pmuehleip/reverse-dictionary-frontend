import React from "react";
import ProfilePic from '../static/profile-pic.png'; 
import Image from 'react-bootstrap/Image';

export function ProfileImage() {
  return (
    <div>
    <a href="https://www.linkedin.com/in/paulmuehleip/">
      <Image height="150" alt="Buy Me a Coffee Widget" src={ProfilePic}/>
    </a>
    </div>
  );
}

export default ProfileImage;