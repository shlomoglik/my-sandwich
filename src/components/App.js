import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import AllFoods from "../pages/AllFoods";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Heading from "./Heading";
import { AuthProvider } from "../context/AuthContext";
import { FOODS, ADD_FOOD, LOGIN } from "../constants/routes";

export default function App() {
  const containerStyle = {
    direction: "rtl",
  };
  const rowBodyStyle = {
    backgroundColor: "#f8f8f8f8",
  };
  return (
    <Container fluid style={containerStyle}>
      <BrowserRouter>
        <AuthProvider>
          <Row style={rowBodyStyle}>
            <Heading />
            <Switch>
              <Route path={LOGIN} exact component={Login} />
              <PrivateRoute path={FOODS} exact component={AllFoods} />
              <PrivateRoute path={ADD_FOOD} exact component={AddFood} />
            </Switch>
          </Row>
        </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}
