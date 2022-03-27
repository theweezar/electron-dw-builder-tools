import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import { ActionModal } from "../ActionModal";

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

export function CartridgeList() {
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