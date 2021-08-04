import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Civilizacion() {
  const { id } = useParams();
  const [pueblo, setPueblo] = useState();

  useEffect(() => {
    obtenerCivilizacion();
  }, []);

  const obtenerCivilizacion = async () => {
    const data = await fetch(
      `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`
    );
    const user = await data.json();
    console.log(user);
    setPueblo(user);
    console.log(pueblo.name);
  };

  return <div></div>;
}
