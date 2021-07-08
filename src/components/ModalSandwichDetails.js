import { Modal, Button } from "react-bootstrap";

export default function ModalSandwichDetails ({ modalData, handleClose }) {
  return <Modal show={true} onHide={handleClose}>
    <Modal.Header>
      <Modal.Title>{modalData.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{modalData.body}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        סגור
      </Button>
      <Button variant="primary" onClick={handleClose}>
        שמור שינויים
      </Button>
    </Modal.Footer>
  </Modal>;
}
