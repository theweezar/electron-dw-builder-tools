/* eslint-disable no-unused-vars */
import { useLayoutEffect, useState } from "react";
import { GoFileDirectory } from "react-icons/go";
import { InputResource } from "./templates/InputResource";
import { CartridgeList } from "./templates/CartridgeList";
import { Terminal } from "./templates/Terminal";

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
