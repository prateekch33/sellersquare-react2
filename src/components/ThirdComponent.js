import React, { useEffect, useState } from "react";

function ThirdComponent() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState([]);
  const [submit, setSubmit] = useState(false);

  const showArray = (x) => {
    let s = ``;
    x.map((e) => {
      s += `${e},`;
    });
    s = s.slice(0, -1);
    return s;
  };

  useEffect(() => {
    if (submit === true) {
      alert("Form Filled");
    }
  }, [submit]);
  return (
    <div className="greetings">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <label htmlFor="fname">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <fieldset>
          <div className="field">
            <input
              type="checkbox"
              id="vehicle1"
              onClick={(e) =>
                setVehicle((previous) => [...previous, e.target.value])
              }
              value="Bike"
            />
            <label htmlFor="vehicle1"> I have a bike</label>
          </div>

          <div className="field">
            <input
              type="checkbox"
              id="vehicle2"
              onClick={(e) =>
                setVehicle((previous) => [...previous, e.target.value])
              }
              value="Car"
            />
            <label htmlFor="vehicle2"> I have a car</label>
          </div>

          <div className="field">
            <input
              type="checkbox"
              id="vehicle3"
              onClick={(e) =>
                setVehicle((previous) => [...previous, e.target.value])
              }
              value="Boat"
            />
            <label htmlFor="vehicle3"> I have a boat</label>
          </div>
        </fieldset>
        <div className="field-submit">
          <button type="submit" onClick={() => setSubmit(true)}>
            Submit
          </button>
        </div>
      </form>
      <h2>Filled Form Details</h2>
      {submit && <span>Name: {name}</span>}
      {submit && <span>Vehicle: {showArray(vehicle)}</span>}
    </div>
  );
}

export default ThirdComponent;
