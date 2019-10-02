import styled from "styled-components";

export const StyledCustomInput = styled.input`
  display: inline-block;
  width: 100%;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px solid grey;
  color: grey;
  font-size: 18px;
  padding: 10px;

  &:focus {
    outline: 0;
  }
`;

export const CustomInputGroup = styled.div`
  margin-bottom: 20px;
`;

export const CustomLabel = styled.label`
  &.visible {
    display: inline;
  }
  &.invisible {
    display: none;
  }
`;
