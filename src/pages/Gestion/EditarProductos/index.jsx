import { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
function PageEditarProducto() {
  const [productoSeleccionado, setProductoSeleccionado] = useState([]);
  let history = useHistory();
  function putProducto(id_put, producto) {
    axios
      .put(`http://localhost:4000/productos/${id_put}`, producto)
      .then((response) => {
        alert("la mascota se modifico correctamente");
        history.push("/tienda");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }
  function getProducto(id_get) {
    axios
      .get(`http://localhost:4000/productos/${id_get}`)
      .then((response) => {
        setProductoSeleccionado(response.data);
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }
  const get_id = useRef(null);
  const put_id = useRef(null);
  const put_class = useRef(null);
  const put_maskot = useRef(null);
  const put_mark = useRef(null);
  const put_name = useRef(null);
  const put_price = useRef(null);
  const put_description = useRef(null);
  const put_photo = useRef(null);

  function putData(e) {
    e.preventDefault();
    const id_put = put_id.current.value;
    const producto = {
      class: put_class.current.value,
      maskot: put_maskot.current.value.toUpperCase(),
      mark: put_mark.current.value,
      name: put_name.current.value,
      price: put_price.current.value,
      description: put_description.current.value,
      photo: put_photo.current.value,
    };
    putProducto(id_put, producto);
  }
  function getData() {
    const id_get = get_id.current.value;
    getProducto(id_get);
  }

  return (
    <div className="modificar_container">
      <input type="number" placeholder="Buscar producto por id" ref={get_id} />
      <button onClick={getData}>Buscar</button>
      <h2>Modificar datos del producto</h2>

      <form action="">
        <input
          type="number"
          readOnly
          placeholder="ID"
          ref={put_id}
          defaultValue={productoSeleccionado.id}
        />

        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          ref={put_class}
        >
          <option value="">Seleccionar una clase</option>
          <option
            value="accesorio"
            selected={productoSeleccionado.class === "accesorio"}
          >
            Accesorio
          </option>
          <option
            value="alimento"
            selected={productoSeleccionado.class === "alimento"}
          >
            Alimento
          </option>
          <option
            value="higiene"
            selected={productoSeleccionado.class === "higiene"}
          >
            Higiene
          </option>
        </select>
        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          ref={put_maskot}
        >
          <option value="">Seleccionar tipo de mascota</option>
          <option value="dog" selected={productoSeleccionado.mascot === "dog"}>
            Perro
          </option>
          <option value="cat" selected={productoSeleccionado.mascot === "cat"}>
            Gato
          </option>
        </select>
        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          ref={put_mark}
        >
          <option value="">Seleccionar marca</option>
          <option
            value="acana"
            selected={productoSeleccionado.mark === "acana"}
          >
            Acana
          </option>
          <option
            value="amity"
            selected={productoSeleccionado.mark === "amity"}
          >
            Amity
          </option>
          <option
            value="boreal"
            selected={productoSeleccionado.mark === "boreal"}
          >
            Boreal
          </option>
          <option
            value="dog chow"
            selected={productoSeleccionado.mark === "dog chow"}
          >
            Dog chow
          </option>
          <option
            value="natura food"
            selected={productoSeleccionado.mark === "natura food"}
          >
            Natura food
          </option>
          <option
            value="protect"
            selected={productoSeleccionado.mark === "protect"}
          >
            Protect
          </option>
          <option
            value="purina"
            selected={productoSeleccionado.mark === "purina"}
          >
            Purina
          </option>
          <option
            value="vitalcan"
            selected={productoSeleccionado.mark === "vitalcan"}
          >
            Vitalcan
          </option>
        </select>
        <input
          type="text"
          placeholder="Ingresa el nombre del producto"
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          defaultValue={productoSeleccionado.name}
          ref={put_name}
        />
        <input
          type="number"
          placeholder="Ingresa el precio del producto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          defaultValue={productoSeleccionado.price}
          ref={put_price}
        />
        <input
          type="text"
          placeholder="Ingresa la url de la foto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          defaultValue={productoSeleccionado.photo}
          ref={put_photo}
        />
        <textarea
          type="text"
          placeholder="Ingresa descripcion del producto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          defaultValue={productoSeleccionado.description}
          ref={put_description}
        />
        <div className="text-center">
          <button
            className="btn bg-secundary p-2 text-white w-40 mx-auto rounded-lg"
            onClick={putData}
          >
            EDITAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default PageEditarProducto;
