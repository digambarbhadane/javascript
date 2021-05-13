import { React, useState } from "react";

const Counter = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);
  const [thirdCounter, setThirdCounter] = useState(0);

  function increaseCounter(index) {
    index === "first" && setFirstCounter(firstCounter + 1);
    index === "second" && setSecondCounter(secondCounter + 1);
    index === "third" && setThirdCounter(thirdCounter + 1);
  }

  function decreaseCounter(index) {
    index === "first" && setFirstCounter(firstCounter - 1);
    index === "second" && setSecondCounter(secondCounter - 1);
    index === "third" && setThirdCounter(thirdCounter - 1);
  }
  return (
    <div>
      <div>
        <p>Counter 1</p>
        <button
          onClick={() => decreaseCounter("first")}
          className="counter-btn"
        >
          -
        </button>
        <input
          type="text"
          id="number"
          value={firstCounter}
          readOnly
          className="couter-textbox"
        />
        <button
          onClick={() => increaseCounter("first")}
          className="counter-btn"
        >
          +
        </button>
      </div>
      <br />
      <br />
      <p>Counter 2</p>
      <button onClick={() => decreaseCounter("second")} className="counter-btn">
        -
      </button>
      <input
        type="text"
        id="number"
        value={secondCounter}
        readOnly
        className="couter-textbox"
      />
      <button onClick={() => increaseCounter("second")} className="counter-btn">
        +
      </button>
      <br />
      <br />
      <p>Counter 3</p>

      <button onClick={() => decreaseCounter("third")} className="counter-btn">
        -
      </button>
      <input
        type="text"
        id="number"
        value={thirdCounter}
        readOnly
        className="couter-textbox"
      />
      <button onClick={() => increaseCounter("third")} className="counter-btn">
        +
      </button>
    </div>
  );
};

export default Counter;
