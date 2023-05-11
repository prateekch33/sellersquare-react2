import React from "react";
import Buttons from "./Buttons";

function FirstComponent() {
  return (
    <div className="fields heading-view">
      <Buttons name={"Primary"} color={"blue"} />
      <Buttons name={"Secondary"} color={"green"} />
    </div>
  );
}

export default FirstComponent;
