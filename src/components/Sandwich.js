import { useContext, useState } from "react";
import { Button, Card } from "react-bootstrap";
import FoodContext from "../context/FoodsContext";
import ModalSandwichDetails from "./ModalSandwichDetails";

export default function Sandwich(props) {
  const [showModal, setShowModal] = useState(false);
  const FoodsCtx = useContext(FoodContext);

  const handleClose = () => setShowModal(false);
  const handleShowModal = () => {
    setShowModal({
      title: props.title,
      body: "האם להוסיף לקופסת האוכל ?",
    });
  };

  const promptRemove = () => {
    const handleRemove = async () => {
      await FoodsCtx.remove(props.id);
    };
    setShowModal({
      title: props.title,
      body: "האם להסיר את המאכל מרשימת המאכלים ? ",
      remove: handleRemove,
    });
  };
  return (
    <>
      <Card style={{ width: "18rem", justifyItems: "center" }}>
        <Card.Img
          variant="top"
          src={props.img}
          height="100px"
          style={{ objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description || "---"}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex gap-1 p-1">
          <Button variant="primary" onClick={handleShowModal}>
            הוסף לקופסא
          </Button>
          <Button variant="danger" onClick={promptRemove}>
            מחיקה
          </Button>
        </Card.Footer>
      </Card>
      {showModal && (
        <ModalSandwichDetails handleClose={handleClose} modalData={showModal} />
      )}
    </>
  );
}
