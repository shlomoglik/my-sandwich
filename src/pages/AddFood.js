import { useContext, useRef, useState } from "react";
import { Alert, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import FoodContext from "../context/FoodsContext";
// import { sandwichData } from "../data";

export default function AddFood() {
  const initialFormData = {
    title: "",
    img: "",
  };

  const foodsCtx = useContext(FoodContext);

  const history = useHistory();
  const [alert, setAlert] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  const titleRef = useRef();
  const imgRef = useRef();

  const clearForm = () => setFormData(initialFormData);
  
  const handleInput = (e, input) => {
    setFormData({ ...formData, [input]: e.target.value || "" });
  };
  const handleAddFood = async (e) => {
    try {
      e.preventDefault();
      await foodsCtx.add({ ...formData});
      clearForm();
      history.push("/");
    } catch (err) {
      console.error(err);
      setAlert(err);
    }
  };
  
  return (
    <Form onSubmit={handleAddFood}>
      <h3>הוסף מאכל חדש</h3>
      <Form.Group controlId="title">
        <Form.Label>מאכל</Form.Label>
        <Form.Control
          required
          type="text"
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
          type="text"
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
