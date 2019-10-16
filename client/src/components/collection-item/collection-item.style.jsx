import styled from "styled-components";
import { clearfix } from "styles/utilities/floats";

export const CollectionItemBackgroundImgHover = styled.div`
  display: none;
  height: inherit;
  width: 100%;
  background-color: rgba(225, 225, 225, 0.3);
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const CollectionCardItem = styled.li`
  width: 25%;
  float: left;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  margin-bottom: 20px;

  &:hover ${CollectionItemBackgroundImgHover} {
    display: flex;
  }
  @media (max-width: 700px) {
    width: 50%;
  }
`;

export const CollectionCartItemDetails = styled.div`
  p {
    margin-top: 5px;
    display: inline-block;

    &:first-child {
      float: left;
    }

    &:nth-child(2) {
      float: right;
    }
  }

  ${clearfix}
`;

export const CollectionItemBackgroundImg = styled.div`
  height: 330px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionItemButton = styled.button`
  background-color: rgba(225, 225, 225, 0.85);
  border: 1px solid #000;
  text-transform: uppercase;
  color: #000;
  width: 90%;
  margin-bottom: 20px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
