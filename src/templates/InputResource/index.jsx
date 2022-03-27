import { GoFileDirectory } from "react-icons/go";
import { FaFile } from "react-icons/fa";

export function InputResource() {
  const onBrowseDWFile = () => {

  }

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
            <button className="btn w-100" onClick={onBrowseDWFile}>Browse File</button>
          </div>
        </div>

      </div>
    </div>
  );
}
