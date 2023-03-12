import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Content,
  Description,
  DetailsImage,
  DetailsIntro,
  Duration,
  ExitButton,
  NotFoundDetails,
  ReleaseDate,
  Title,
} from "./styled";

// Conectando com a API
const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_DETAILS;

import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../../components/Loading";

export default function Details() {
  // Recebendo o id que foi enviado na URL
  const { id } = useParams();

  const [dataMovie, setDataMovie] = useState({});
  // URL base para acessar a foto do filme
  const movieImage = "https://image.tmdb.org/t/p/w500";
  // Estado de loading...
  const [loading, setLoading] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      const movie = {
        id,
        title: data.title,
        overview: data.overview,
        image: `${movieImage}${data.poster_path}`,
        releaseDate: data.release_date,
        runtime: data.runtime,
      };

      setLoading(false);
      setDataMovie(movie);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    // Verificando se foi enviado um ID, caso não o fetch não é executado
    if (!id) return;

    const movie = `${apiUrl}${id}?api_key=${apiKey}`;
    fetchData(movie);
  }, []);

  // Caso não ouver id, retorna esse conteúdo:
  if (!id) {
    return (
      <NotFoundDetails>
        <Title>Ops! ouve um erro ao ver mais detalhes</Title>
      </NotFoundDetails>
    );
  }

  // Caso o id enviado for inválido alguma chave do objeto DATAMOVIE será undefined podendo ocorrer um erro na aplicação
  // O FOR abaixo verifica se à alguma chave vazia e retorna um conteúdo:
  for (let chave in dataMovie) {
    if (
      Object.prototype.hasOwnProperty.call(dataMovie, chave) &&
      !dataMovie[chave]
    ) {
      return (
        <NotFoundDetails>
          <Title>Ops! ouve um erro ao ver mais detalhes</Title>
        </NotFoundDetails>
      );
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Container>
      <Content>
        <DetailsImage>
          <img src={dataMovie.image} alt={dataMovie.title} />
        </DetailsImage>
        <DetailsIntro>
          <Title>{dataMovie.title}</Title>
          <Description>{dataMovie.overview}</Description>
          <Duration>{`${dataMovie.runtime} minutes`}</Duration>
          <ReleaseDate>{dataMovie.releaseDate}</ReleaseDate>
          {/* Redirecionando o usuário para a página anterior*/}
          <ExitButton onClick={() => window.history.back()}>
            <AiOutlineArrowLeft style={{ marginRight: 5 }} />
            Go Back
          </ExitButton>
        </DetailsIntro>
      </Content>
    </Container>
  );
}
