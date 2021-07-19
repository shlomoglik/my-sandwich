import { Modal, Button } from "react-bootstrap";

export default function ModalSandwichDetails({
  modalData,
  handleClose,
}) {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{modalData.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalData.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          סגור
        </Button>
        {/* {handleClose && (
          <Button variant="primary" onClick={handleClose}>
            שמור שינויים
          </Button>
        )} */}
        {modalData.remove && (
          <Button variant="danger" onClick={modalData.remove}>
            מחיקה
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
