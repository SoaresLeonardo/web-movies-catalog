import React, { useEffect, useState } from "react";
import { CardContainer, CardImage, CardTitle, Container } from "./styled";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_URL;

export default function Home() {
  const [dataMovies, setDataMovies] = useState([]);
  const movieImage = "https://image.tmdb.org/t/p/w500";

  console.log(dataMovies);
  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDataMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const movies = `${apiUrl}api_key=${apiKey}`;
    fetchData(movies);
  }, []);

  return (
    <Container>
      {dataMovies.map((item) => (
        <CardContainer key={item.id}>
          <CardImage
            src={`${movieImage}${item.poster_path}`}
            alt={item.title}
          />
          <CardTitle>{item.title}</CardTitle>
        </CardContainer>
      ))}
    </Container>
  );
}
