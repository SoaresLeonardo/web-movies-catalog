import React from "react";
import {
  Container,
  Content,
  Title,
  TitleContainer,
  SearchMovieContainer,
  InputSearch,
  IconSearch,
} from "./styled";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  // const [search, setSearch] = useState(false);
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Movies API</Title>
        </TitleContainer>
        <SearchMovieContainer>
          <InputSearch>
            <input type="text" placeholder="Search" />
          </InputSearch>
          <IconSearch>
            <AiOutlineSearch />
          </IconSearch>
        </SearchMovieContainer>
      </Content>
    </Container>
  );
}
