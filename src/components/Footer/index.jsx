import React from "react";
import polygon from "../../Assests/icons/polygon.svg";
import reef from "../../Assests/icons/reef.svg";
import uniled from "../../Assests/icons/uniled.svg";
import biconomy from "../../Assests/icons/biconomy.svg";
import frontier from "../../Assests/icons/frontier.svg";
import Polk from "../../Assests/icons/Polk.svg";
import trustpad from "../../Assests/icons/trustpad.svg";

let imgArray = [
  polygon,
  reef,
  uniled,
  biconomy,
  frontier,
  Polk,
  trustpad,
];

const Footer = () => {
  return (
    <div className='footer_height flex items-center our_partner_container px-4'>
      <h1>Our Partners</h1>
      {imgArray?.map((item) => (
        <div className='partners_logo'>
          <img src={item} alt='logo'/>
        </div>
      ))}
    </div>
  );
};

export default Footer;
