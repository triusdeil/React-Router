import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Nosotros() {
  const [civilizacion, setCivilizacion] = useState([]);

  useEffect(() => {
    obtenerCivilizacion();
  }, []);

  const obtenerCivilizacion = async () => {
    const data = await fetch(
      "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
    );
    const users = await data.json();
    setCivilizacion(users.civilizations);
  };

  return (
    <div>
      <h1>Civilizaciones del Age II</h1>
      <ul>
        {civilizacion.map((item) => (
          <li key={item.id}>
            <Link to={`/nosotros/${item.id}`}>
              {item.name} - {item.expansion}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
