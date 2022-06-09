import React from "react";
import styled from "styled-components";

const Button = ({ label, color, bg, borderR, padding, width, onClick }) => {
  return (
    <CustomButton
      onClick={onClick}
      color={color}
      background={bg}
      borderRadius={borderR}
      padding={padding}
      width={width}
    >
      {label}
    </CustomButton>
  );
};

export default Button;

const CustomButton = styled.button`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  border: none;
  width: ${({ width }) => width};
  cursor: pointer;
`;
