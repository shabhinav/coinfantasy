import { Grid } from "@mui/material";
import React from "react";
import { Inner_Nav } from "../../resources/constants";
import Button from "../Common/Button/Button";
import cup from "../../Assests/icons/cup.svg";
import BasicModal from "../Common/Modal";
import { colorPalette } from "../../theme/color-palette";
import Login from "../Login";

export const Banner = () => {
  const { white, black, yellow, violet } = colorPalette;
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='bg-black'>
      <Grid container>
        <Grid xl={7} lg={7} xs={0}></Grid>
        <Grid xl={5} lg={5} xs={12}>
          <div className='flex justify-evenly inner_nav mt-2'>
            {Inner_Nav?.map((item, index) => (
              <p key={index} className='text-white text-base z-100'>
                {item.name}
              </p>
            ))}
            <Button
              color={violet}
              bg={white}
              borderR={"4px"}
              label={"Join Waitlist"}
              padding={"11px 13px"}
              width={"128px"}
              onClick={handleOpen}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid xl={7} lg={7}>
          <div className='banner_text_container'>
            <h1 className='text-white text-xxl m-0 bourgeois'>
              Worlds First Crypto Fantasy Game
            </h1>

            <p className='text-white text-md mt-2'>
              Join the Play to Earn based fantasy gaming for crypto-stock
              markets
            </p>
            <Button
              color={black}
              bg={yellow}
              borderR={"4px"}
              label={"Join Waitlist"}
              padding={"11px 13px"}
              width={"128px"}
              onClick={handleOpen}
            />
          </div>
        </Grid>
        <Grid xl={5} lg={5}>
          <div className=''>
            <img className='h-full w-full' src={cup} alt='cup' />
          </div>
        </Grid>
      </Grid>
      <BasicModal open={open} handleClose={handleClose}>
        <Login
          email={email}
          phone={phone}
          setEmail={setEmail}
          setPhone={setPhone}
          onClick={handleClose}
        />
      </BasicModal>
    </div>
  );
};
