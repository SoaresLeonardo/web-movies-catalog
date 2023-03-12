import { LoadingContainer, Title } from "./styled";
import React from "react";

export default function Loading() {
  // Função de loading que irá aparecer enquanto a aplicação faz o fetch:
  return (
    <LoadingContainer>
      <Title>Loading...</Title>
    </LoadingContainer>
  );
}
