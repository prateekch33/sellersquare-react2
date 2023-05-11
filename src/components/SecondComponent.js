import React, { useState } from "react";

function SecondComponent() {
  const [car, setCar] = useState(" ");
  return (
    <div className="dropdown-section">
      <div className="dropdown">
        <label htmlFor="cars">Choose a car:</label>

        <select
          name="cars"
          id="cars"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        >
          <option value="">
            Select a car
          </option>
          <option value="Volvo">Volvo</option>
          <option value="Saab">Saab</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Audi">Audi</option>
        </select>
      </div>
      <span>You have selected: {car}</span>
    </div>
  );
}

export default SecondComponent;
