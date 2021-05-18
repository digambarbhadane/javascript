import React, { useState } from "react";

const Counter = () => {
  const [values, setValues] = useState([]);

  const createUI = () => {
    return values.map((el, i) => (
      <div key={i} className="counter-div">
        <input
          type="text"
          value={el}
          readOnly
          className="form-control text-center small-text counter-textbox"
        ></input>
        <button
          value={el}
          onClick={(e) => handleDescrement(e, i)}
          className="btn btn-sm btn-warning m-2"
        >
          {" "}
          -{" "}
        </button>
        <button
          value={el}
          onClick={(e) => handleIncrement(e, i)}
          className="btn btn-sm btn-success m-2"
        >
          {" "}
          +{" "}
        </button>

        <button
          onClick={(e) => deleteCounter(i)}
          className="btn btn-sm btn-danger m-2"
        >
          x
        </button>
      </div>
    ));
  };

  const deleteCounter = (i) => {
    let value = [...values];
    value.splice(i, 1);
    setValues(value);
  };

  const handleIncrement = (event, i) => {
    let value = [...values];
    value[i] = value[i] + 1;
    setValues(value);
    console.log("values---", values);
  };

  const handleDescrement = (event, i) => {
    let value = [...values];
    value[i] = value[i] > 0 ? value[i] - 1 : 0;
    setValues(value);
  };

  const handleAdd = () => {
    setValues((arr) => [...arr, 0]);
    console.log("values---", values);
  };

  const clearData = () => {
    let value = [];
    values.map((i) => {
      return value.push(0);
    });
    setValues(value);
  };

  const deleteAll = () => {
    setValues([]);
  };
  return (
    <div>
      <button
        onClick={() => handleAdd()}
        className="btn btn-md btn-primary m-1"
      >
        Add
      </button>
      <button
        onClick={() => clearData()}
        className="btn btn-md btn-secondary m-1"
      >
        Reset All
      </button>

      <button onClick={() => deleteAll()} className="btn btn-md btn-danger m-1">
        Delete All
      </button>

      {createUI()}
    </div>
  );
};

export default Counter;
