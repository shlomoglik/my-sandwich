import { useRef, useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { sandwichData } from "../data";

export default function AddFood() {
  const initialFormData = {
    title: "",
    img: "",
  };

  const history = useHistory();
  const [alert, setAlert] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const titleRef = useRef();
  const imgRef = useRef();

  const clearForm = () => setFormData(initialFormData);
  const handleAddFood = async (e) => {
    try {
      e.preventDefault();
      await Promise.resolve(
        setTimeout(() => {
          const lastID = sandwichData.reduce((acc, curr) => Math.max(acc, curr.lastID),1);
          sandwichData.push({ ...formData, id: lastID + 1 });
        }, 1500)
      );
      clearForm();
      history.replace("/");
    } catch (err) {
      console.error(err);
      setAlert(err);
    }
  };

  const handleInput = (e, input) => {
    setFormData({ ...formData, [input]: e.target.value || "" });
  };

  return (
    <Form onSubmit={handleAddFood}>
      <h3>הוסף מאכל חדש</h3>
      <Form.Group controlId="title">
        <Form.Label>מאכל</Form.Label>
        <Form.Control
          required
          type="title"
          ref={titleRef}
          placeholder="דוגמא: פיתה עם מלפפון"
          value={formData.title}
          onInput={(e) => handleInput(e, "title")}
        />
      </Form.Group>
      <Form.Group controlId="img">
        <Form.Label>קישור לתמונת נושא</Form.Label>
        <Form.Control
          required
          type="img"
          ref={imgRef}
          placeholder="photoURL.jgp"
          value={formData.img}
          onInput={(e) => handleInput(e, "img")}
        />
      </Form.Group>
      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <Button variant="primary" type="submit">
          הוסף
        </Button>
      </div>
      {alert && <Alert variant="danger">{alert}</Alert>}
    </Form>
  );
}
