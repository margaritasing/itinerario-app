import React, { useCallback, useEffect, useState } from "react";

export const useFetchCity = () => {
  const [cities, setCity] = useState([]);
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(true);

  const peticion = useCallback(async () => {
    
    let route = `http://localhost:4000/api/datos`;

    if (input !== "") {
      route = `http://localhost:4000/api/datos`;
    }

    setLoading(true);

    let res = await fetch(route);

    const data = await res.json();

    console.log(data.response)

    if (data.response) {
      setCity(data.response);
    } else {
      setCity(data);
    }
    setLoading(false);
  }, [input]);

  useEffect(() => {
    peticion();
  }, [input, peticion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    console.log(text)

    setInput(text);
  };

  return [cities, loading, handleSubmit];
};