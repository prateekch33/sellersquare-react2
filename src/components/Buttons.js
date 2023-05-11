import React from "react";

function Buttons(props) {
  return (
    <>
      <button className="buttons" style={{ backgroundColor: `${props.color}` }}>
        {props.name}
      </button>
    </>
  );
}

export default Buttons;
