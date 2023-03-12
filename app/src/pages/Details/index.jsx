import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import {
  Container,
  Content,
  Description,
  DetailsImage,
  DetailsIntro,
  Duration,
  ExitButton,
  ReleaseDate,
  Title,
} from "./styled";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_DETAILS;

import { AiOutlineArrowLeft } from "react-icons/ai";
import Loading from "../../components/Loading";

export default function Details() {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState({});
  const movieImage = "https://image.tmdb.org/t/p/w500";
  console.log(dataMovie);

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
    if (!id) return;
    const movie = `${apiUrl}${id}?api_key=${apiKey}`;
    fetchData(movie);
  }, []);

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
          <Link to="/">
            <ExitButton>
              <AiOutlineArrowLeft style={{ marginRight: 5 }} />
              Go Back
            </ExitButton>
          </Link>
        </DetailsIntro>
      </Content>
    </Container>
  );
}
