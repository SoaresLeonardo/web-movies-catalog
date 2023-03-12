import React from "react";
import {
  CodeProject,
  Container,
  Content,
  Description,
  LinkIcon,
  NumberCode,
  Title,
} from "./styled";

import { AiFillGithub } from "react-icons/ai";

export default function NotFoundPage404() {
  document.title = "404 Not Found";

  return (
    <Container>
      <Content>
        <NumberCode>404</NumberCode>
        <Title>Ops!, ocorreu um erro</Title>
        <Description>
          Caso queira acessar o código do projeto acesse:
        </Description>
        <CodeProject>
          <LinkIcon
            href="https://github.com/SoaresLeonardo/web-movies-catalog"
            target="_blank"
          >
            <AiFillGithub />
          </LinkIcon>
        </CodeProject>
      </Content>
    </Container>
  );
}
