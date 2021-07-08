import { useState } from "react";
import { Form, Button, Container, Row, Alert } from "react-bootstrap";
import firebase from "firebase/app";

export default function Login() {
  const [{ email, password }, setUserData] = useState({
    email: "",
    password: "",
  });
  const [alert, setAlert] = useState("");

  const handleInput = (e, input) => {
    setUserData({ [input]: e.target.value || "" });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const authHandler = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (authHandler && authHandler.user !== null) {
        console.log("SUCCESS");
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
            placeholder="הזן כתובת אימייל"
            value={email}
            onInput={(e) => handleInput(e, "email")}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>סיסמא</Form.Label>
          <Form.Control
            type="password"
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
