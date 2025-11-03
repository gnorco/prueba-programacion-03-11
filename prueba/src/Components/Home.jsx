import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ObtenerDatos = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/users");
        setData(res.data.users.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    ObtenerDatos();
  }, []);

  if (data.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Usuarios</h1>

      {data.map((user) => (
        <div key={user.id} className="caja" style={{ marginBottom: "20px" }}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Ciudad: {user.address.city}</p>
          
          <Link to={`/user/${user.id}`}>
            <button className="buttonDetalles">Ver detalles</button>
          </Link>
        </div>
      ))}
    </div>
  );
}
