import styled from "styled-components";

export const CartDropdownWrapper = styled.div`
  position: absolute;
  width: 240px;
  padding: 20px;
  border: 1px solid black;
  right: 0px;
  top: 70px;
  background-color: #fff;
  z-index: 5;
  text-align: center;

  .button {
    width: 100%;
  }
`;

export const NoDataText = styled.p`
  font-size: 18px;
  margin: 0;
`;

export const CartDropdownContent = styled.ul`
  height: 240px;
  overflow-y: auto;
  text-align: left;
`;
