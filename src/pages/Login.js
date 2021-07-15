import { useRef, useState } from "react";
import { Form, Button, Container,  Alert } from "react-bootstrap";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory()
  const emailRef = useRef();
  const passwordRef = useRef();
  const [{ email, password }, setUserData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const handleInput = (e, input) => {
    setUserData(
      Object.assign({ email, password }, { [input]: e.target.value || "" })
    );
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const authHandler = await firebase
        .auth()
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        );
      if (authHandler && authHandler.user !== null) {
        console.log("SUCCESS => uid ",authHandler.user.uid);
        history.replace("/")
      }
    } catch (err) {
      console.error(err);
      setAlert(err);
    }
  };

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f8f8f8f8",
      }}
    >
      <Form onSubmit={handleLogin}>
        <h3>התחברות</h3>
        <Form.Group controlId="email">
          <Form.Label>כתובת אימייל</Form.Label>
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="הזן כתובת אימייל"
            value={email}
            onInput={(e) => handleInput(e, "email")}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="הזן סיסמא"
            value={password}
            onInput={(e) => handleInput(e, "password")}
          />
        </Form.Group>
        <div style={{ marginTop: "15px", textAlign: "center" }}>
          <Button variant="primary" type="submit">
            התחבר
          </Button>
        </div>
        {alert && <Alert variant="danger">{alert}</Alert>}
      </Form>
    </Container>
  );
}
