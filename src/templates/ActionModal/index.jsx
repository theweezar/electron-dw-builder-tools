import { useState } from "react";
import { Modal } from "react-bootstrap";

export function ActionModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn text-white btn-action-trigger ms-auto" onClick={handleShow}>
        Action
      </button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12 col-md-2">
              <p>Command</p>
            </div>
            <div className="col-12 col-md-10">
              <div className="command-container">
                <div className="command-inject px-1" contentEditable={true}></div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div className="btn-action-container px-1 mb-1 mb-lg-0">
            <button className="btn w-100" >
              Build JS
            </button>
          </div>
          <div className="btn-action-container px-1 mb-1 mb-lg-0">
            <button className="btn w-100" >
              Build SCSS
            </button>
          </div>
          <div className="btn-action-container px-1 mb-1 mb-lg-0">
            <button className="btn w-100" >
              Build both
            </button>
          </div>
          <div className="btn-action-container px-1 mb-1 mb-lg-0">
            <button className="btn w-100" >
              Re-install
            </button>
          </div>
          <div className="btn-action-container px-1 mb-1 mb-lg-0">
            <button className="btn w-100" >
              Run command
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
