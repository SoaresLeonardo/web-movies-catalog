import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import {
  CardContainer,
  CardImage,
  CardTitle,
  ContainerHome,
  Content,
  LoadingContainer,
  Title,
  TitleContainer,
} from "./styled";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_URL;

export default function Home() {
  const [dataMovies, setDataMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const movieImage = "https://image.tmdb.org/t/p/w500";

  console.log(dataMovies);
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
    const movies = `${apiUrl}api_key=${apiKey}`;
    fetchData(movies);
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <Title>Loading...</Title>
      </LoadingContainer>
    );
  }

  return (
    <>
      <ContainerHome>
        <TitleContainer>
          <Title>Popular movies</Title>
        </TitleContainer>
        <Content>
          {dataMovies &&
            dataMovies.map((item) => (
              <CardContainer key={item.id}>
                <CardImage
                  src={`${movieImage}${item.poster_path}`}
                  alt={item.title}
                />
                <CardTitle>{item.title}</CardTitle>
              </CardContainer>
            ))}
        </Content>
      </ContainerHome>
      <Footer />
    </>
  );
}
