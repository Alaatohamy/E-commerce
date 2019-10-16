import styled from "styled-components";

export const CardItem = styled.li`
  min-width: 30%;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  height: ${({ size }) => (size === "large" ? "380px" : "240px")};
  @media (max-width: 480px) {
    height: 240px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;
    overflow: hidden;

    .card__content {
      opacity: 0.9;
    }
  }
`;

export const CardBackgroundImg = styled.div`
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const CardContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: 1px solid black;
  background-color: rgba(225, 225, 225, 0.7);
  text-transform: capitalize;

  * {
    margin: 0;
  }
`;

export const CardTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.p`
  font-weight: lighter;
  font-size: 16px;
`;
