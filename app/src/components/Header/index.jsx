import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";

export default function Header() {
  // const [search, setSearch] = useState(false);

  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputSearch) return;

    navigate(`/search?query=${inputSearch}`, { replace: true });
    setInputSearch("");
  };

  // console.log(inputSearch);
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Movies API</Title>
        </TitleContainer>
        <SearchMovieContainer onSubmit={handleSubmit}>
          <InputSearch>
            <input
              type="text"
              value={inputSearch}
              placeholder="Search"
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </InputSearch>
          <IconSearch type="submit">
            <AiOutlineSearch />
          </IconSearch>
        </SearchMovieContainer>
      </Content>
    </Container>
  );
}
