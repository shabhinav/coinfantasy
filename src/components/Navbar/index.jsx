import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import menu from "../../Assests/icons/menu.svg";
import ada from "../../Assests/icons/ada.svg";
import TemporaryDrawer from "../Common/Drawer";
import SideDraw from "../Sidedraw";

const Navbar = ({ cryptoPrice }) => {
  const [state, setState] = useState({ left: false });
  return (
    <div className='nav_height bg-black relative'>
      <div className='cursor-pointer absolute justify-center left-0 h-full w-10 bg-black text-white flex items-center z-100'>
        <img src={menu} onClick={() => setState({ left: true })} alt='menu' />
      </div>
      <Marquee>
        {cryptoPrice?.map((item) => (
          <div key={item?.id} className='text-white pr-2 flex items-center'>
            <img src={ada} alt='company' />
            <p className='ml-1'>{item?.name}</p>
            <p className='text-xxs text-green ml-1'>
              {(item?.quote?.USD?.price).toFixed(2)}%
            </p>
          </div>
        ))}
      </Marquee>
      <TemporaryDrawer state={state} setState={setState} position={"left"}>
        <SideDraw />
      </TemporaryDrawer>
    </div>
  );
};

export default Navbar;
