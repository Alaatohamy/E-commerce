import React from "react";
import { withRouter } from "react-router-dom";
import {
  CardItem,
  CardBackgroundImg,
  CardContent,
  CardTitle,
  Subtitle
} from "./card.style";

const Card = props => {
  const { title, imageUrl, size, linkUrl, history, match } = props;

  return (
    <CardItem
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <CardBackgroundImg role="presentation" imageUrl={imageUrl} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <Subtitle>Shop Now</Subtitle>
      </CardContent>
    </CardItem>
  );
};

export default withRouter(Card);
