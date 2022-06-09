import React from "react";
import Button from "../Common/Button/Button";
import { colorPalette } from "../../theme/color-palette";

const Login = ({ onClick, setEmail, setPhone, email, phone }) => {
  const { black, yellow } = colorPalette;
  return (
    <div>
      <h2 className='mt-0'>JOIN US</h2>
      <div>
        <input
          className='input_spacing'
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          className='input_spacing'
          type='phone'
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Button
        color={black}
        bg={yellow}
        borderR={"4px"}
        label={"Join Waitlist"}
        padding={"11px 13px"}
        width={"128px"}
        onClick={onClick}
      >
        Join
      </Button>
    </div>
  );
};

export default Login;
