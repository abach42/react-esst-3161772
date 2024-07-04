import React, { useMemo, useState, useEffect } from "react";

export function App() {
  const [showXy, setShowXy] = useState(false);

  const [xy, setXy] = useState({
    x: 0,
    y: 0,
  });

  const reset = () => {
    return {
      x: 0,
      y: 0,
    };
  };

  useEffect(() => {
    const mousemove = (event) => {
      setXy(() => {
        return {
          x: event.offsetX,
          y: event.offsetY,
        };
      });
    };

    const keyup = (event) => {
      if (event.key === "Escape") {
        setShowXy(false);
        setXy(reset);
      }
    };

    window.addEventListener("keyup", keyup);
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  const xyView = useMemo(() => {
    if (showXy) {
      return (
        <p>
          <strong>X={xy.x}</strong>
          <strong>Y={xy.y}</strong>
        </p>
      );
    }
  }, [showXy, xy]);

  const toggleShow = () => {
    setShowXy((showXy) => !showXy);
    setXy(reset);
  };

  return (
    <div>
      <h1>XY-Viewer</h1>

      <button onClick={toggleShow} type="button">
        On/Off
      </button>

      {xyView}
    </div>
  );
}
