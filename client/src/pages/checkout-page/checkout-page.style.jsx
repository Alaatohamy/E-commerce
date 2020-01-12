import styled from "styled-components";

export const StyledCheckoutPage = styled.section`
  min-width: 500px;
  width: 55%;
  height: 90vh;
  margin: auto;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 850px) {
    width: 95%;
  }
  @media (max-width: 600px) {
    min-width: unset;
    width: 100%;
    text-align: right;
  }
`;

export const Hint = styled.div`
  text-align: center;
  font-size: 24px;
  color: red;
  margin-top: 30px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
