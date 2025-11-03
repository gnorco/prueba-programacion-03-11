import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detalle() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerUsuario();
  }, [id]);



  return (
    <div>
      <h1>Detalles del Usuario</h1>

      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>Email: {user.email}</p>
      <p>Edad: {user.age}</p>
      <p>Altura: {user.height} cm</p>
      <p>Peso: {user.weight} kg</p>
      <p>Teléfono: {user.phone}</p>
      <p>Ciudad: {user.address.city}</p>

      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
}
