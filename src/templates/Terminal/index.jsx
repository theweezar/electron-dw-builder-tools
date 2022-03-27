/* eslint-disable no-unused-vars */
import { useLayoutEffect, useState } from "react";

export function Terminal() {
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
