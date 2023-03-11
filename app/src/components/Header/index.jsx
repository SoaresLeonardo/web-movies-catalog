import React, { useState } from "react";
import {
  Container,
  Content,
  HeaderLinks,
  Link,
  Menu,
  Title,
  TitleContainer,
  SearchMovieContainer,
  InputSearch,
} from "./styled";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);
  // const [search, setSearch] = useState(false);
  const showSiderbar = () => {
    setSidebar(!sidebar);
  };

  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>MV</Title>
        </TitleContainer>

        <HeaderLinks sidebar={sidebar}>
          <Link>
            <a href="#">Movies</a>
          </Link>
          <Link>
            <a href="#">Popular</a>
          </Link>
        </HeaderLinks>
        <SearchMovieContainer>
          <InputSearch>
            <input type="text" placeholder="Search" />
          </InputSearch>

          <AiOutlineSearch />
        </SearchMovieContainer>
        <Menu>
          <FaBars onClick={showSiderbar} />
        </Menu>
      </Content>
    </Container>
  );
}
