import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import { PageAdoptaDetalle } from './pages/Adopta/adoptaDetalle';
import { PageConsultas } from "../src/pages/Consultas";
import { PageNosotros } from "../src/pages/Nosotros";
import { PageBlog } from "../src/pages/Blog";
import { PageTiendaDetalle } from "./pages/Tienda/TiendaDetalle";
import { PageAgregarMascota } from "./pages/Gestion/Mascotas";
import { PageAgregarProducto } from "./pages/Gestion/AgregarProductos";
import { PageLogin } from "./pages/Login";
import { PageTienda } from "./pages/Tienda";
import { PagePagar } from "./pages/Pagar";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
//
import { PagePerfil } from "../src/pages/perfil";
import PageFormulario from "../src/pages/formulario";
import PageError from "../src/pages/error";
import { PageAdopta } from "../src/pages/Adopta";
import { PageHome } from "../src/pages/Home";
import PageModificarAnimales from "./pages/Gestion/EditarAnimales";
import PageRegistroAnimales from "./pages/Gestion/AgregarAnimales";
import PageEliminarAnimales from "./pages/Gestion/EliminarAnimales";
import PageDonar from "../src/pages/donar";
import { PageGestion } from "./pages/Gestion/index";
import Filter from "../src/components/filter";
import { store, persistor } from "./store";
import { PrivateRoute } from "./components/PrivateRoute";
import "./App.css";
import PageEditarProducto from "./pages/Gestion/EditarProductos";
import { PageEliminarProducto } from "./pages/Gestion/EliminarProductos";

function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Header />
            <Main>
              <Switch>
                <Route exact path="/">
                  <PageHome />
                </Route>
                <Route path="/login">
                  <PageLogin />
                </Route>
                <Route path="/consultas">
                  <PageConsultas />
                </Route>
                <Route path="/nosotros">
                  <PageNosotros />
                </Route>
                <Route path="/blog">
                  <PageBlog />
                </Route>
                <Route exact path="/adopta">
                  <PageAdopta />
                </Route>
                <Route path="/agregarMascota">
                  <PageAgregarMascota />
                </Route>
                <Route exact path="/tienda">
                  <PageTienda />
                </Route>
                <Route path="/tienda/:idProducto">
                  <PageTiendaDetalle />
                </Route>

                <PrivateRoute
                  exact
                  path="/registrarProducto"
                  component={PageAgregarProducto}
                />
                <PrivateRoute
                  path="/editarProducto"
                  component={PageEditarProducto}
                />
                <PrivateRoute
                  path="/eliminarProducto"
                  component={PageEliminarProducto}
                />
                <Route path="/pagar">
                  <PagePagar />
                </Route>
                <Route path="/donar">
                  <PageDonar />
                </Route>

                <PrivateRoute
                  path="/eliminarMascota"
                  component={PageEliminarAnimales}
                />
                <PrivateRoute
                  path="/editarMascota"
                  component={PageModificarAnimales}
                />
                <PrivateRoute
                  path="/registrarMascota"
                  component={PageRegistroAnimales}
                />

                <Route exact path="/adopta">
                  <PageAdopta />
                </Route>
                <Route path="/adopta/:idMascota">
                  <PagePerfil />
                </Route>
                <Route path="/formulario">
                  <PageFormulario />
                </Route>

                <Route exact path="/filter">
                  <Filter />
                </Route>

                <PrivateRoute exact path="/gestion" component={PageGestion} />
                <Route path="*">
                  <PageError />
                </Route>
              </Switch>
            </Main>
            <Footer />
          </Router>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
