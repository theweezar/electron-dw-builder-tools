import { useLayoutEffect, useState } from "react";

function Terminal() {
  const calculateHeight = () => {
    return `${(window.innerHeight - 215) > 150 ? window.innerHeight - 215 : 150}px`;
  };

  var [style, setStyle] = useState({
    height: calculateHeight()
  });

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
      <div className="terminal mt-4 rounded text-light p-2" style={style}></div>
    </div>
  );
}

function App() {
  return (
    <div className='app p-4'>
      <div className="d-flex">
        <div className="col-9">
          <div className="input-section">
            <div className="form-group">
              <label htmlFor="work-dir">Work Directory</label>
              <input type="text" id="work-dir" className="form-control mt-2" aria-label="Work Directory" disabled />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="work-dir">DW File</label>
              <input type="text" id="dw-file" className="form-control mt-2" aria-label="DW file JSON" disabled />
            </div>
          </div>
          <Terminal/>
        </div>
        <div className="col-3">

        </div>
      </div>

    </div>
  );
}

export default App;
