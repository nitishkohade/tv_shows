// src/components/Header.tsx
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #d1d1d1;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const Header: React.FC<{ text: string }> = ({ text }) => {
  return (
    <HeaderContainer>
      <HeaderText>{text}</HeaderText>
    </HeaderContainer>
  );
};
