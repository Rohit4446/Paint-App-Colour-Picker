import React, { useEffect, useState } from "react";
import "../styles/Child.css";

const Selection = (props) => {
  const { applyColor } = props;
  const [color, setColor] = useState({ background: "" });

  // useEffect(() => {
  //   console.log("selection child triggered...");
  //   console.log("color-child", color);
  // });

  return (
    <>
      <div
        className="fix-box"
        style={{ background: color }}
        onClick={() => applyColor(setColor)}
      >
        <h2 className="subheading">Selection</h2>
      </div>
    </>
  );
};

export default Selection;
