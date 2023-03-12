import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import {
  CardContainer,
  CardImage,
  CardTitle,
  ContainerHome,
  Content,
  Title,
  TitleContainer,
} from "./styled";

// Conectando com a API
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_URL;

export default function Home() {
  document.title = "Movies API";

  const [dataMovies, setDataMovies] = useState([]);
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
    const movies = `${apiUrl}api_key=${apiKey}`;
    fetchData(movies);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerHome>
      <TitleContainer>
        <Title>Popular movies</Title>
      </TitleContainer>
      <Content>
        {dataMovies &&
          dataMovies.map((item) => (
            <CardContainer key={item.id}>
              {/* O link irá redirecionar o usuário para uma página com o id do filme como parâmetro que irá servir para buscar mais informações sobre o filme selecionado... */}
              <Link to={`details/${item.id}`}>
                <CardImage
                  src={`${movieImage}${item.poster_path}`}
                  alt={item.title}
                />
              </Link>
              <CardTitle>{item.title}</CardTitle>
            </CardContainer>
          ))}
      </Content>
      <Footer />
    </ContainerHome>
  );
}
