import { useState } from "react";
import axios from "axios";

function PageAgregarProducto() {
  const [form, setForm] = useState({
    class: "",
    mascot: "",
    mark: "",
    name: "",
    price: "",
    description: "",
    photo: "",
  });
  const clases = [
    {
      title: "accesorio",
      value: "accesorio",
    },
    {
      title: "alimento",
      value: "alimento",
    },
    {
      title: "higiene",
      value: "higiene",
    },
  ];
  const mascots = [
    {
      title: "Gato",
      value: "cat",
    },
    {
      title: "Perro",
      value: "dog",
    },
  ];
  const marcas = [
    {
      title: "Acana",
      value: "acana",
    },
    {
      title: "Amity",
      value: "amity",
    },
    {
      title: "Boreal",
      value: "boreal",
    },
    {
      title: "Dog chow",
      value: "dog chow",
    },
    {
      title: "Natura food",
      value: "natura food",
    },
    {
      title: "Protect",
      value: "protect",
    },
    {
      title: "Purina",
      value: "purina",
    },
    {
      title: "Vitalcan",
      value: "vitalcan",
    },
  ];

  function saveProducto(producto) {
    axios
      .post("http://localhost:4000/productos", producto)
      .then((response) => {
        alert("El producto se guardo correctamente");
      })
      .catch(() => {
        alert("Por favor intentalo nuevamente");
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    saveProducto(form);
  }

  return (
    <div className="page-agregar-producto">
      <form onSubmit={handleSubmit}>
        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.class}
          onChange={(e) => {
            setForm((state) => {
              return {
                ...state,
                class: e.target.value,
              };
            });
          }}
        >
          <option value="">Seleccionar una clase</option>
          {clases.map((clase) => (
            <option>{clase.title}</option>
          ))}
        </select>
        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.mascot}
          onChange={(e) => {
            setForm((state) => {
              return {
                ...state,
                mascot: e.target.value,
              };
            });
          }}
        >
          <option value="">Seleccionar tipo de mascota</option>
          {mascots.map((mascot) => (
            <option>{mascot.title}</option>
          ))}
        </select>
        <select
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.mark}
          onChange={(e) => {
            setForm((state) => {
              return {
                ...state,
                mark: e.target.value,
              };
            });
          }}
        >
          <option value="">Seleccionar marca</option>
          {marcas.map((marca) => (
            <option>{marca.title}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Ingresa el nombre del producto"
          className="border border-gray-400 p-3  w-full mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.name}
          onChange={(e) =>
            setForm((state) => ({ ...state, name: e.target.value }))
          }
        />
        <input
          type="number"
          placeholder="Ingresa el precio del producto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.price}
          onChange={(e) =>
            setForm((state) => ({ ...state, price: e.target.value }))
          }
        />
        <input
          type="text"
          placeholder="Ingresa la url de la foto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.photo}
          onChange={(e) =>
            setForm((state) => ({ ...state, photo: e.target.value }))
          }
        />
        <textarea
          type="text"
          placeholder="Ingresa descripcion del producto"
          className="border border-gray-400 w-full p-3  mb-4 rounded-lg focus:outline-none focus:border-secondary"
          required
          value={form.description}
          onChange={(e) =>
            setForm((state) => ({ ...state, description: e.target.value }))
          }
        />
        <div className="text-center">
          <button className="btn bg-secundary p-2 text-white w-40 mx-auto rounded-lg">
            AGREGAR
          </button>
        </div>
      </form>
    </div>
  );
}

export { PageAgregarProducto };
