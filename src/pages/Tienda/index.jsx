import { useEffect, useState } from "react";
import { api } from "../../services/api";
import React from "react";
import { CardTienda } from "../../components/CardTienda";
import { Menu, Button } from "antd";
import "./tienda.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
function PageTienda() {
  const [productos, setProductos] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [productosBuscado, setProductosBuscado] = useState([]);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  let history = useHistory();
  const productsBuyed = useSelector((state) => {
    return state.tienda.productsBuyed;
  });
  const { SubMenu } = Menu;
  function getProductos() {
    api
      .get("productos")
      .then((response) => {
        setProductos(response.data);
        setProductosBuscado(response.data);
      })
      .catch((e) => {});
  }
  const filtro = (valor) => {
    const productosFiltrados = productosBuscado.filter((product) =>
      product.name.toLowerCase().includes(valor)
    );
    setProductos(productosFiltrados);
  };
  useEffect(() => {
    getProductos();
  }, []);
  const seleccionarSpecie = (valor) => {
    const productosFiltrados = productosBuscado.filter(
      (product) => product.mascot === valor
    );
    setProductos(productosFiltrados);
  };
  const seleccionarMark = (valor) => {
    const productosFiltrados = productosBuscado.filter(
      (product) => product.mark === valor
    );
    setProductos(productosFiltrados);
  };
  const seleccionarCategory = (valor) => {
    const productosFiltrados = productosBuscado.filter(
      (product) => product.class === valor
    );
    setProductos(productosFiltrados);
  };
  return (
    <>
      <input
        type="text"
        className="border border-green-700 p-6 w-full mb-4"
        placeholder="Filtrar"
        onChange={(e) => {
          filtro(e.target.value);
        }}
      />
      <div className="adopta-icono-container">
        <FontAwesomeIcon
          icon={faBars}
          className="adopta-icono"
          onClick={() => setMenu(!menu)}
        />
        {menu && (
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={false}
          >
            <Menu.Item
              key="1"
              icon={<AppstoreOutlined />}
              onClick={() => setProductos(productosBuscado)}
            >
              Todo
            </Menu.Item>
            {/* <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Ofertas
              </Menu.Item>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                Vestimenta
              </Menu.Item> */}
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Especie">
              <Menu.Item key="2" onClick={() => seleccionarSpecie("dog")}>
                Perro
              </Menu.Item>
              <Menu.Item key="3" onClick={() => seleccionarSpecie("cat")}>
                Gato
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Marcas">
              <Menu.Item key="4" onClick={() => seleccionarMark("Acana")}>
                Acana
              </Menu.Item>
              <Menu.Item key="5" onClick={() => seleccionarMark("Amity")}>
                Amity
              </Menu.Item>
              <Menu.Item key="6" onClick={() => seleccionarMark("Boreal")}>
                Boreal
              </Menu.Item>
              <Menu.Item key="7" onClick={() => seleccionarMark("Dog chow")}>
                Dog chow
              </Menu.Item>
              <Menu.Item
                key="11"
                onClick={() => seleccionarMark("Natura food")}
              >
                Natura food
              </Menu.Item>
              <Menu.Item key="8" onClick={() => seleccionarMark("Protect")}>
                Protect
              </Menu.Item>
              <Menu.Item key="9" onClick={() => seleccionarMark("Purina")}>
                Purina
              </Menu.Item>
              <Menu.Item key="10" onClick={() => seleccionarMark("Vitalcan")}>
                Vitalcan
              </Menu.Item>
              {/* <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu> */}
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Categoria">
              <Menu.Item
                key="11"
                onClick={() => seleccionarCategory("alimento")}
              >
                Alimento
              </Menu.Item>
              <Menu.Item
                key="12"
                onClick={() => seleccionarCategory("accesorio")}
              >
                Accesorio
              </Menu.Item>
              <Menu.Item
                key="13"
                onClick={() => seleccionarCategory("higiene")}
              >
                Cuidado e higiene
              </Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </div>
      <div className=" md:flex">
        <div className="container-filtro">
          <div className={`${collapsed ? "" : "w-12/12"} `}>
            <div>
              <Button
                type="primary"
                onClick={() => setCollapsed(!collapsed)}
                style={{ marginBottom: 16 }}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
              >
                <Menu.Item
                  key="1"
                  icon={<AppstoreOutlined />}
                  onClick={() => setProductos(productosBuscado)}
                >
                  Todo
                </Menu.Item>
                {/* <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Ofertas
              </Menu.Item>
              <Menu.Item key="3" icon={<AppstoreOutlined />}>
                Vestimenta
              </Menu.Item> */}
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Especie">
                  <Menu.Item key="2" onClick={() => seleccionarSpecie("dog")}>
                    Perro
                  </Menu.Item>
                  <Menu.Item key="3" onClick={() => seleccionarSpecie("cat")}>
                    Gato
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Marcas">
                  <Menu.Item key="4" onClick={() => seleccionarMark("Acana")}>
                    Acana
                  </Menu.Item>
                  <Menu.Item key="5" onClick={() => seleccionarMark("Amity")}>
                    Amity
                  </Menu.Item>
                  <Menu.Item key="6" onClick={() => seleccionarMark("Boreal")}>
                    Boreal
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    onClick={() => seleccionarMark("Dog chow")}
                  >
                    Dog chow
                  </Menu.Item>
                  <Menu.Item
                    key="11"
                    onClick={() => seleccionarMark("Natura food")}
                  >
                    Natura food
                  </Menu.Item>
                  <Menu.Item key="8" onClick={() => seleccionarMark("Protect")}>
                    Protect
                  </Menu.Item>
                  <Menu.Item key="9" onClick={() => seleccionarMark("Purina")}>
                    Purina
                  </Menu.Item>
                  <Menu.Item
                    key="10"
                    onClick={() => seleccionarMark("Vitalcan")}
                  >
                    Vitalcan
                  </Menu.Item>
                  {/* <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu> */}
                </SubMenu>
                <SubMenu
                  key="sub3"
                  icon={<AppstoreOutlined />}
                  title="Categoria"
                >
                  <Menu.Item
                    key="11"
                    onClick={() => seleccionarCategory("alimento")}
                  >
                    Alimento
                  </Menu.Item>
                  <Menu.Item
                    key="12"
                    onClick={() => seleccionarCategory("accesorio")}
                  >
                    Accesorio
                  </Menu.Item>
                  <Menu.Item
                    key="13"
                    onClick={() => seleccionarCategory("higiene")}
                  >
                    Cuidado e higiene
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div>
        <div className="container-productos">
          {productos.map((producto) => (
            <CardTienda
              name={producto.name}
              mark={producto.mark}
              price={producto.price}
              photo={producto.photo}
              id={producto.id}
              onAddCart={(product) => {
                dispatch({
                  type: "ADD_PRODUCT",
                  payload: product,
                });
              }}
              onViewProduct={(productId) => {
                history.push(`/tienda/${productId}`);
              }}
              onIncrement={(id) => {
                console.log("incremento!!");
                dispatch({
                  type: "INCREMENT_PRODUCT",
                  payload: id,
                });
              }}
              onDecrement={(id, quantity) => {
                quantity.quantity <= 1
                  ? (() => {
                      window.confirm("Deseas quitar tu producto") &&
                        dispatch({
                          type: "REMOVE_PRODUCT",
                          payload: id,
                        });
                    })()
                  : (() => {
                      dispatch({
                        type: "DECREMENT_PRODUCT",
                        payload: id,
                      });
                    })();
              }}
              quantity={
                productsBuyed.filter((product) => product.id === producto.id)[0]
              }
              isAdded={productsBuyed.find(
                (product) => product.id === producto.id
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export { PageTienda };
