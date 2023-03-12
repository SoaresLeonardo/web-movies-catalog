import { NotFoundContainer, Title } from "./styled";
import React from "react";

// eslint-disable-next-line react/prop-types
export default function NotFound({text}) {
  return (
    <NotFoundContainer>
      <Title>{text}</Title>
    </NotFoundContainer>
  );
}
