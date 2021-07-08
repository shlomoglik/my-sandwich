import { Container, Row } from "react-bootstrap";
import { Route, Switch } from "react-router";
import AllFoods from "../pages/AllFoods";
import Login from "./Login";
import { FirebaseAuthConsumer, IfFirebaseUnAuthed } from "@react-firebase/auth";
import Heading from "./Heading";

export default function App() {
  const containerStyle = {
    direction: "rtl",
    padding: "0",
    maring: "0",
    minHeight: "100vh",
    minWidth: "100vw",
  };
  return (
    <>
       {/* <IfFirebaseUnAuthed>
         <Login/>
       </IfFirebaseUnAuthed>
       <FirebaseAuthConsumer>
         {({ isSignedIn }) =>
           isSignedIn && ( */}
            <Container style={containerStyle}>
              <Heading />
              <Row>
                <Switch>
                  <Route path="/" exact component={AllFoods} />
                </Switch>
              </Row>
            </Container>
           {/* )
         }
       </FirebaseAuthConsumer> */}
    </>
  );
}
