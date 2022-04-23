import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => {
    return state.auth.auth;
  });
  return (
    <Route {...rest}>{auth ? <Component /> : <Redirect to="/login" />}</Route>
  );
};

export { PrivateRoute };
