import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./tiendaDetalle.css";
function PageTiendaDetalle() {
  const [producto, setProducto] = useState({});
  const [vistas, setVistas] = useState({
    vista: false,
    vista2: false,
    vista3: false,
  });
  const productsBuyed = useSelector((state) => {
    return state.tienda.productsBuyed;
  });
  const isAdded = productsBuyed.find((product) => product.id === producto.id);
  const productobuyed = productsBuyed.filter(
    (product) => product.id === producto.id
  )[0];
  const dispatch = useDispatch();
  let history = useHistory();
  // const [vista, setVista] = useState("hidden");
  // const [vista2, setVista2] = useState("hidden");
  // const [vista3, setVista3] = useState("hidden");

  let { idProducto } = useParams();

  function getProducto(id) {
    api.get(`productos/${id}`).then((response) => setProducto(response.data));
  }

  useEffect(() => {
    console.log("cargo");
    getProducto(idProducto);
  }, [idProducto]);

  return (
    <div className="container-tienda">
      <div className=" my-auto container-photo">
        <img src={producto.photo} alt="" />
      </div>
      <div className="pt-32 container-information">
        <h2 className="text-primary font-extrabold text-2xl">
          {producto.name}
        </h2>
        <h3 className="text-xl mt-2">{producto.mark}</h3>
        <h3 className="text-xl mt-2">S/.{producto.price}</h3>
        <h4 className="text-blue-600 font-bold text-xl mt-3">Cantidad</h4>
        {!isAdded ? (
          <button
            className="p-2 bg-primary block text-white hover:bg-blue-400 hover:text-black w-full"
            onClick={() =>
              dispatch({
                type: "ADD_PRODUCT",
                payload: producto,
              })
            }
          >
            Agregar al carrito
          </button>
        ) : (
          <div className="flex w-80">
            <button
              onClick={() => {
                productobuyed.quantity <= 1
                  ? (() => {
                      window.confirm("Deseas quitar tu producto") &&
                        dispatch({
                          type: "REMOVE_PRODUCT",
                          payload: producto.id,
                        });
                    })()
                  : (() => {
                      dispatch({
                        type: "DECREMENT_PRODUCT",
                        payload: producto.id,
                      });
                    })();
              }}
              className=" bg-primary w-20 text-white text-2xl"
            >
              -
            </button>
            <input
              type="text"
              disabled
              value={productobuyed.quantity}
              className="border rounded p-4 text-center w-full text-xl"
            />
            <button
              onClick={() => {
                dispatch({
                  type: "INCREMENT_PRODUCT",
                  payload: producto.id,
                });
              }}
              className=" bg-primary w-20 text-white text-2xl"
            >
              +
            </button>
          </div>
        )}

        <h4 className="text-blue-600 font-bold text-xl mt-3 mb-3">
          Descripción del producto
        </h4>
        <p className="text-xl">{producto.description}</p>
        <button
          className="p-2 bg-secundary text-white w-52 rounded my-1 text-2xl"
          onClick={() => history.push(`/pagar`)}
        >
          checkout
        </button>
      </div>
      <div className="my-auto container-extra">
        <ul className="list-none">
          <li>
            <span
              className="flex justify-between py-2 px-4 mb-2 bg-blue-700 text-white font-bold rounded-2xl"
              onClick={() =>
                setVistas((state) => ({ ...state, vista: !state.vista }))
              }
            >
              Tu compra ayuda <span>{vistas.vista ? "-" : "+"}</span>
            </span>
            <div className={`${vistas.vista ? "block" : "hidden"} p-4`}>
              Con tu compra estás ayudando directamente a los perros y gatos de
              los albergues afiliados a Patitas y casos sociales. El 80% de las
              ganancias va directamente a Patitas para continuar con su misión
              de 0 perros y gatos en las calles.
            </div>
          </li>
          <li>
            <span
              className="flex justify-between py-2 px-4 mb-2 bg-blue-700 text-white font-bold rounded-2xl"
              onClick={() =>
                setVistas((state) => ({ ...state, vista2: !state.vista2 }))
              }
            >
              Tiempo de entrega <span>{vistas.vista2 ? "-" : "+"}</span>
            </span>
            <div className={`${vistas.vista2 ? "block" : "hidden"} p-4`}>
              El tiempo de entrega para Lima y Callao es de 2 a 3 días hábiles
              y, para provincias es de 3 a 4 días hábiles. Si haces tu pedido el
              fin de semana, puede demorar un día hábil adicional.
            </div>
          </li>
          <li>
            <span
              className="flex justify-between py-2 px-4 mb-2 bg-blue-700 text-white font-bold rounded-2xl"
              onClick={() =>
                setVistas((state) => ({ ...state, vista3: !state.vista3 }))
              }
            >
              Adopta y obten tu descuento{" "}
              <span>{vistas.vista3 ? "-" : "+"}</span>
            </span>
            <div className={`${vistas.vista3 ? "block" : "hidden"} p-4`}>
              Si adoptas a una mascota, tienes un dscto de hasta 15% en tu
              compra por 3 meses.
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { PageTiendaDetalle };
