import React, { useEffect, useState } from "react";

export default function Contactos() {
  const [equipo, setEquipo] = useState([]);

  //corchetes al final [] para ejecutar 1 sola vez y no crear un bucle
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setEquipo(users);
  };

  return (
    <div>
      <h1>Contactos</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
