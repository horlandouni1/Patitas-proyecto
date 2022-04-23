import axios from "axios";
import "./eliminar.css";
import { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
function PageEliminarAnimales() {
  let history = useHistory();
  const [mascotasObtenidos, setMacotasObtenidos] = useState([]);
  const [mascotasObtenidosBuscado, setMascotasObtenidosBuscado] = useState([]);
  const filtro = (valor) => {
    const mascotasFiltrados = mascotasObtenidosBuscado.filter((mascota) =>
      mascota.name.toLowerCase().includes(valor)
    );
    setMacotasObtenidos(mascotasFiltrados);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/mascotas`)
      .then((response) => {
        setMacotasObtenidos(response.data);
        setMascotasObtenidosBuscado(response.data);
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }, []);
  function getMascota(id_delete) {
    axios
      .delete(`http://localhost:4000/mascotas/${id_delete}`)
      .then((response) => {
        alert("se elimino la mascota correctamente");
        history.push("/adopta");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }
  const delete_id = useRef(null);
  function deleteData() {
    const id_delete = delete_id.current.value;
    getMascota(id_delete);
  }
  return (
    <div className="eliminar_container">
      <h2 className="text-4xl">Eliminar dato de mascota</h2>
      <input
        placeholder="buscar por nombre de la mascota"
        onChange={(e) => {
          filtro(e.target.value);
        }}
      />
      <table>
        <tr>
          <td className="p-2">id</td>
          <td className="text-center p-2">Nombre</td>
        </tr>
        {mascotasObtenidos.map((mascota) => (
          <tr>
            <td className="text-center">{mascota.id}</td>
            <td className="text-center">{mascota.name}</td>
          </tr>
        ))}
      </table>
      <input
        type="number"
        placeholder="Eliminar mascota por id"
        ref={delete_id}
      />
      <button
        onClick={deleteData}
        className="btn bg-secundary p-2 text-white w-40 mx-auto rounded-lg"
      >
        Eliminar
      </button>
    </div>
  );
}
export default PageEliminarAnimales;
