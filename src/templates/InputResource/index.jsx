import { GoFileDirectory } from "react-icons/go";
import { FaFile } from "react-icons/fa";
import { dialog } from "electron";
import { useState } from "react";

export function InputResource() {
  const [dwFilePath, setDWFilePath] = useState('');

  const onBrowseDWFile = () => {
    if (process.platform !== 'darwin') {
      // If the platform is 'win32' or 'Linux'
      dialog.showOpenDialog({
        title: 'Select the File to be uploaded',
        // defaultPath: path.join(__dirname, '../assets/'),
        buttonLabel: 'Upload',
        filters: [
          {
            name: 'DW Files',
            extensions: ['json']
          },],
        properties: ['openFile']
      }).then(file => {
        console.log(file.canceled);
        if (!file.canceled) {
          var filepath = file.filePaths[0].toString();
          setDWFilePath(filepath);
        }
      }).catch(err => {
        setDWFilePath('Can not open file.');
      });
    }
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
            <input type="text" id="dw-file" className="form-control" aria-label="DW file JSON" disabled value={dwFilePath}/>
          </div>
          <div className="col-12 col-md-3 mt-2 mt-md-0">
            <button className="btn w-100" onClick={onBrowseDWFile}>Browse File</button>
          </div>
        </div>

      </div>
    </div>
  );
}
