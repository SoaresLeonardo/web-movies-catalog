import React from "react";
import {
  Container,
  Content,
  Title,
  TitleContainer,
  SearchMovieContainer,
  InputSearch,
} from "./styled";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  // const [search, setSearch] = useState(false);
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>MV</Title>
        </TitleContainer>
        <SearchMovieContainer>
          <InputSearch>
            <input type="text" placeholder="Search" />
          </InputSearch>

          <AiOutlineSearch />
        </SearchMovieContainer>
      </Content>
    </Container>
  );
}
