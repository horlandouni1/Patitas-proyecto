import axios from "axios";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

function PageEliminarProducto() {
  let history = useHistory();
  const [productosObtenidos, setProductosObtenidos] = useState([]);
  const [productosObtenidosBuscado, setProductosObtenidosBuscado] = useState(
    []
  );
  const filtro = (valor) => {
    const productosFiltrados = productosObtenidosBuscado.filter((product) =>
      product.name.toLowerCase().includes(valor)
    );
    setProductosObtenidos(productosFiltrados);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:4000/productos`)
      .then((response) => {
        setProductosObtenidos(response.data);
        setProductosObtenidosBuscado(response.data);
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }, []);

  function getProducto(id_delete) {
    axios
      .delete(`http://localhost:4000/productos/${id_delete}`)
      .then((response) => {
        alert("se elimino el producto correctamente");
        history.push("/tienda");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }
  const delete_id = useRef(null);
  function deleteData() {
    const id_delete = delete_id.current.value;
    getProducto(id_delete);
  }
  return (
    <div className="eliminar_container">
      <h2 className="text-4xl">Eliminar Producto</h2>
      <input
        placeholder="buscar por nombre del producto"
        onChange={(e) => {
          filtro(e.target.value);
        }}
      />
      <table>
        <tr>
          <td className="p-2">id</td>
          <td className="text-center p-2">Nombre</td>
        </tr>
        {productosObtenidos.map((producto) => (
          <tr>
            <td className="text-center">{producto.id}</td>
            <td className="text-center">{producto.name}</td>
          </tr>
        ))}
      </table>
      <input
        type="number"
        placeholder="Introduce el id de la mascota a eliminar"
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
export { PageEliminarProducto };
