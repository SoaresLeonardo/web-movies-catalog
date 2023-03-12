import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import {
  CardContainer,
  CardImage,
  CardTitle,
  ContainerSearch,
  Content,
  Title,
  TitleContainer,
} from "./styled";

// Conectando com a API
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_SEARCH;

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [dataMovies, setDataMovies] = useState([]);

  console.log(dataMovies);

  // Estado de loading...
  const [loading, setLoading] = useState(false);
  // URL base para acessar a foto do filme
  const movieImage = "https://image.tmdb.org/t/p/w500";

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setLoading(false);
      setDataMovies(data.results);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    const searchMovieURL = `${apiUrl}?api_key=${apiKey}&query=${query}`;
    fetchData(searchMovieURL);
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerSearch>
      <TitleContainer>
        <Title>{`Resultados de ${query}`}</Title>
      </TitleContainer>
      <Content>
        {dataMovies &&
          dataMovies.map((item) => (
            <CardContainer key={item.id}>
              <Link to={`/details/${item.id}`}>
                <CardImage
                  src={`${movieImage}${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <CardTitle>{item.title}</CardTitle>
            </CardContainer>
          ))}
      </Content>
    </ContainerSearch>
  );
}
