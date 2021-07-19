import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import AllFoods from "../pages/AllFoods";
import AddFood from "../pages/AddFood";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Heading from "./Heading";
import { AuthProvider } from "../context/AuthContext";
import { FOODS, ADD_FOOD, LOGIN, ADMIN } from "../constants/routes";
import { FoodProvider } from "../context/FoodsContext";
// import Admin from "../pages/Admin";

export default function App() {
  const containerStyle = {
    direction: "rtl",
  };
  const rowBodyStyle = {
    backgroundColor: "#f8f8f8f8",
  };
  return (
    <AuthProvider>
      <FoodProvider>
        <Container fluid style={containerStyle}>
          <BrowserRouter>
            <Row style={rowBodyStyle}>
              <Heading />
              <Switch>
                <Route path={LOGIN} exact component={Login} />
                <PrivateRoute path={FOODS} exact component={AllFoods} />
                <PrivateRoute path={ADD_FOOD} exact component={AddFood} />
                {/* <PrivateRoute path={ADMIN} exact component={Admin} /> */}
              </Switch>
            </Row>
          </BrowserRouter>
        </Container>
      </FoodProvider>
    </AuthProvider>
  );
}
