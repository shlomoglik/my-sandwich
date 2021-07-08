import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function SandwichAdd(props) {
  return (
    <>
      <Card style={{ width: "18rem", justifyItems: "center" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>
            <Link to="add">+הוסף חדש</Link>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
