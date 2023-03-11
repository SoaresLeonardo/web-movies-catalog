import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_DETAILS;

export default function Details() {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState({});
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
        sinopse: data.sinopse,
      };
      setLoading(false);
      setDataMovie(movie);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  useEffect(() => {
    const movie = `${apiUrl}${id}?api_key=${apiKey}`;
    fetchData(movie);
  }, []);

  return (
    <>
      <h1>{dataMovie.title}</h1>
    </>
  );
}
