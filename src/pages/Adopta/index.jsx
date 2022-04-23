import "./adopta.css";
import Card from "../../components/card";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Menu, Button } from "antd";
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
function PageAdopta() {
  let history = useHistory();
  // const [perros, setPerros] = useState([]);
  // function getPerros() {
  //     axios
  //         .get('http://localhost:4000/mascotas')
  //         .then((response) => {
  //             setPerros(response.data);
  //         })
  //         .catch((e) => { });
  // }
  // useEffect(() => {
  //     getPerros();
  // }, []);
  const [mascotas, setMascotas] = useState([]);
  const [mascotasBuscado, setMascotasBuscado] = useState([]);
  const [colapso, setColapso] = useState(false);
  const [menu, setMenu] = useState(false);
  const { SubMenu } = Menu;

  useEffect(() => {
    axios("http://localhost:4000/mascotas")
      .then((response) => {
        console.log(response.data);
        setMascotas(response.data);
        setMascotasBuscado(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);
  const filtro = (valor) => {
    const mascotasFiltrados = mascotasBuscado.filter((mascota) =>
      mascota.name.toLowerCase().includes(valor)
    );
    setMascotas(mascotasFiltrados);
  };
  const seleccionarSpecie = (valor) => {
    const mascotasFiltrados = mascotasBuscado.filter(
      (mascota) => mascota.class === valor
    );
    setMascotas(mascotasFiltrados);
  };
  const seleccionarSex = (valor) => {
    const mascotasFiltrados = mascotasBuscado.filter(
      (mascota) => mascota.sex === valor
    );
    setMascotas(mascotasFiltrados);
  };
  const seleccionarSize = (valor) => {
    const mascotasFiltrados = mascotasBuscado.filter(
      (mascota) => mascota.tall === valor
    );
    setMascotas(mascotasFiltrados);
  };
  return (
    <div className="mascotas_container">
      <div className="navegacion">
        <input
          type="text"
          className="border border-green-700 p-6 w-full mb-4"
          placeholder="Filtrar por nombre"
          onChange={(e) => {
            filtro(e.target.value);
          }}
        />
      </div>
      <div className="mascotas_filters">
        <div className=" md:flex">
          <div className={`${colapso ? "" : "w-11/12"} `}>
            <div>
              <Button
                type="primary"
                onClick={() => setColapso(!colapso)}
                style={{ marginBottom: 16 }}
              >
                {React.createElement(
                  colapso ? MenuUnfoldOutlined : MenuFoldOutlined
                )}
              </Button>
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={colapso}
              >
                <Menu.Item
                  key="1"
                  icon={<AppstoreOutlined />}
                  onClick={() => setMascotas(mascotasBuscado)}
                >
                  Todo
                </Menu.Item>
                <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Especie">
                  <Menu.Item key="5" onClick={() => seleccionarSpecie("dog")}>
                    Perro
                  </Menu.Item>
                  <Menu.Item key="6" onClick={() => seleccionarSpecie("cat")}>
                    Gato
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Sexo">
                  <Menu.Item key="7" onClick={() => seleccionarSex("hembra")}>
                    Hembra
                  </Menu.Item>
                  <Menu.Item key="8" onClick={() => seleccionarSex("macho")}>
                    Macho
                  </Menu.Item>

                  {/* <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu> */}
                </SubMenu>
                <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Tamaño">
                  <Menu.Item
                    key="15"
                    onClick={() => seleccionarSize("pequeño")}
                  >
                    Pequeño
                  </Menu.Item>
                  <Menu.Item
                    key="16"
                    onClick={() => seleccionarSize("mediano")}
                  >
                    Mediano
                  </Menu.Item>
                  <Menu.Item key="17" onClick={() => seleccionarSize("grande")}>
                    Grande
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div>
      </div>
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
            className="menu-adopta"
          >
            <Menu.Item
              key="1"
              icon={<AppstoreOutlined />}
              onClick={() => setMascotas(mascotasBuscado)}
            >
              Todo
            </Menu.Item>
            <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Especie">
              <Menu.Item key="5" onClick={() => seleccionarSpecie("dog")}>
                Perro
              </Menu.Item>
              <Menu.Item key="6" onClick={() => seleccionarSpecie("cat")}>
                Gato
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Sexo">
              <Menu.Item key="7" onClick={() => seleccionarSex("hembra")}>
                Hembra
              </Menu.Item>
              <Menu.Item key="8" onClick={() => seleccionarSex("macho")}>
                Macho
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<AppstoreOutlined />} title="Tamaño">
              <Menu.Item key="15" onClick={() => seleccionarSize("pequeño")}>
                Pequeño
              </Menu.Item>
              <Menu.Item key="16" onClick={() => seleccionarSize("mediano")}>
                Mediano
              </Menu.Item>
              <Menu.Item key="17" onClick={() => seleccionarSize("grande")}>
                Grande
              </Menu.Item>
            </SubMenu>
          </Menu>
        )}
      </div>
      <div className="mascotas_grid">
        {/* {perros.map((perro) => (
                    <Card
                        key={perro.id}
                        id={perro.id}
                        photo={perro.photo}
                        name={perro.name}
                        status={perro.status}
                    />
                ))} */}

        {mascotas.map((value) => {
          return (
            <Card
              key={value.id}
              id={value.id}
              photo={value.photo}
              name={value.name}
              status={value.status}
            />
          );
        })}
      </div>
    </div>
  );
}

export { PageAdopta };
