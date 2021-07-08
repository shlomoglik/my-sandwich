import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ModalSandwichDetails from "./ModalSandwichDetails";

export default function Sandwich(props) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShowModal = (modalID) => {
    setShowModal({
      title: props.title,
      body: props.description || "",
    });
  };
  return (
    <>
      <Card style={{ width: "18rem", justifyItems: "center" }}>
        <Card.Img variant="top" src={props.img} height="100px" style={{objectFit:"contain"}} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>---</Card.Text>
          <Button variant="primary" onClick={handleShowModal}>
            הוסף לקופסא
          </Button>
        </Card.Body>
      </Card>
      {showModal && (
        <ModalSandwichDetails handleClose={handleClose} modalData={showModal} />
      )}
    </>
  );
}
