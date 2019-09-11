import styled, { css } from "styled-components"

const black = css`
  background-color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`

const blue = css`
  background-color: #4285f4;
  border: 1px solid #4285f4;

  &:hover {
    background-color: #fff;
    color: #4285f4;
  }
`

const getStyledButton = props => {
  return props.color === "blue" ? blue : black
}

export const CustomButton = styled.button`
  padding: 15px 35px;
  font-size: 15px;
  font-family: "Open Sans Condensed";
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  min-width: 140px;
  width: auto;

  ${getStyledButton}
`
