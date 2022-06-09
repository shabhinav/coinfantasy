import React from "react";
import { Inner_Nav } from "../../resources/constants";

const SideDraw = () => {
  return (
    <div>
      <div className='mx-4'>
        {Inner_Nav?.map((item) => (
          <p className='cursor-pointer'>{item?.name}</p>
        ))}
        <p>Join Now</p>
      </div>
    </div>
  );
};

export default SideDraw;
