import { useLayoutEffect, useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { FaFile, FaCheck } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import { Modal, Button } from "react-bootstrap";

function Terminal() {
  const calculateHeight = () => {
    return `${(window.innerHeight - 215) > 150 ? window.innerHeight - 215 : 150}px`;
  };

  const [style, setStyle] = useState({
    height: calculateHeight()
  });

  const [text, setText] = useState('This is the terminal output');

  useLayoutEffect(() => {
    const updateSize = () => setStyle({
      height: calculateHeight()
    });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="terminal-section">
      <div className="terminal mt-4 rounded text-light p-2" style={style}>{text}</div>
    </div>
  );
}

function CartridgeItem({ name, id }) {
  const [checked, setChecked] = useState(false);

  return (
    <li className="nav-item user-select-none">
      <input type="checkbox" name={name} id={id} hidden onChange={() => setChecked(!checked)} />
      <div className="d-flex align-items-center">
        <div className="ct-checkbox border border-white d-flex align-items-center justify-content-center">
          <FaCheck className={!checked ? "d-none" : ""} />
        </div>
        <label htmlFor="name1" className="ms-2">app_custom_core</label>
      </div>
    </li>
  );
}

function CartridgeList() {
  return (
    <div className="cartridge-section px-2">
      <div className="d-flex align-items-center cartridge-title">
        <RiSoundModuleFill />
        <div className="ms-2">Cartridges</div>
        <ActionModal />
      </div>
      <div className="cartridges-list mt-1">
        <ul className="nav flex-column">
          <CartridgeItem name="name1" id="name1" />
        </ul>
      </div>
    </div>
  );
}

function ActionModal() {
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

function InputResource() {
  return (
    <div className="input-section">
      <div className="form-group">
        <label htmlFor="work-dir">
          <div className="d-flex align-items-center">
            <GoFileDirectory />
            <div className="ms-2">Work Directory</div>
          </div>
        </label>
        <div className="row mt-2">
          <div className="col-12 col-md-9">
            <input type="text" id="work-dir" className="form-control" aria-label="Work Directory" disabled />
          </div>
          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <button className="btn w-100">Open Folder</button>
          </div>
        </div>
      </div>
      <div className="form-group mt-3">
        <label htmlFor="work-dir">
          <div className="d-flex align-items-center">
            <FaFile />
            <div className="ms-2">DW File</div>
          </div>
        </label>
        <div className="row mt-2">
          <div className="col-12 col-md-9">
            <input type="text" id="dw-file" className="form-control" aria-label="DW file JSON" disabled />
          </div>
          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <button className="btn w-100">Browse File</button>
          </div>
        </div>

      </div>
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      <div className="d-flex">
        {/* Left section */}
        <div className="col-9">
          <div className="p-4 pe-2">
            <InputResource />
            <Terminal />
          </div>
        </div>

        {/* Right section */}
        <div className="col-3 vh-100 py-4">
          <CartridgeList />
        </div>
      </div>

    </div>
  );
}

export default App;
