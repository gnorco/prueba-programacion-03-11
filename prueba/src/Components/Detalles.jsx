import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../Detalles.css'

export default function Detalle() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const obtenerUsuario = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/users/${id}`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerUsuario();
  }, [id]);

  if (!data.id) {
    return <div>Cargando...</div>;
  }



  return (
    <div className="cajaUsuario">
      <h1>Detalles del usuario </h1>

      <h2>{data.firstName} {data.lastName}</h2>

      <p>Email: {data.email}</p>
      <p>Edad: {data.age}</p>
      <p>Altura: {data.height} cm</p>
      <p>Peso: {data.weight} kg</p>
      <p>Teléfono: {data.phone}</p>
      <p>Ciudad: {data.address?.city}</p>
      <img src={data.image} alt=""  />
      <br/>
      <Link to="/">
        <button>Volver</button>
      </Link>
    </div>
  );
}
