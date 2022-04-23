import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main.css";
import "bootstrap/dist/css/bootstrap.min.css";
const users = {
  username: "horlando",
  password: "12345",
};
const Login = () => {
  const form = useRef(null);
  let history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      useEmail: formData.get("email"),
      password: formData.get("password"),
    };
    // const response = users.find(
    //   (element) =>
    //     element.username === data.useEmail && element.password === data.password
    // );
    if (users.username === data.useEmail && users.password === data.password) {
      dispatch({
        type: "SET_LOGIN",
        payload: true,
      });
      history.push(`/gestion`);
    }
  };
  return (
    <main>
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <form ref={form}>
              <label>Usuarios</label>
              <br />
              <input type="text" className="form-control" name="email" />
              <br />
              <label>Contraseña</label>
              <br />
              <input type="password" className="form-control" name="password" />
              <br />
              <button
                className="btn btn-primary"
                type="button"
                onClick={(e) => handleSubmit(e)}
              >
                Iniciar Sesión
              </button>
              <br />
              <label>usuario:horlando , password:12345 </label>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Login };
