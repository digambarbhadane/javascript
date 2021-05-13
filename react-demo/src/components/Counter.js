import { React, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increaseCounter(index) {
    console.log("called", index);
    index === "counter" && setCounter(counter + 1);
    console.log("counter value---", counter);
  }

  function decreaseCounter(index) {
    index === "counter" && setCounter(counter - 1);
  }

  const resetCounter = () => {
    console.log("rset counter");
    setCounter(0);
    // console.log("counter value---", counter);
  };

  function createCounter() {
    console.log("function called");

    var div = document.createElement("div");
    div.id = "counter";
    div.className = "counter-div";

    var row = div.rowIndex;
    console.log("row----------", row);

    var textbox = document.createElement("input");
    textbox.type = "text";
    textbox.name = "counter";
    textbox.id = counter;
    textbox.value = counter;
    textbox.className = "couter-textbox";

    var btnIncrement = document.createElement("input");
    btnIncrement.type = "button";
    btnIncrement.name = "increamentBtn";
    btnIncrement.value = "+";
    btnIncrement.className = "counter-btn";

    var btnDecrement = document.createElement("input");
    btnDecrement.type = "button";
    btnDecrement.name = "decrementBtn";
    btnDecrement.value = "-";
    btnDecrement.className = "counter-btn";

    var btnDelete = document.createElement("input");
    btnDelete.type = "button";
    btnDelete.name = "delete";
    btnDelete.value = "X";
    btnDelete.className = "btn-delete";
    btnDelete.addEventListener("click", function () {
      document.body.removeChild(div);
    });

    div.appendChild(btnDecrement);
    div.appendChild(textbox);
    div.appendChild(btnIncrement);
    div.appendChild(btnDelete);

    // var container = document.getElementById("container");
    document.body.appendChild(div);

    btnIncrement.addEventListener("click", function () {
      increaseCounter("counter");
    });

    btnDecrement.addEventListener("click", function () {
      decreaseCounter("counter");
    });

    // };
  }
  return (
    <>
      <p>Counter</p>
      <button onClick={() => createCounter()}>Add Counter</button>
      <button onClick={() => resetCounter()}>Reset Counter</button>
      <div className="container" id="container"></div>
    </>
    // <div>
    //   <button onClick={() => createCounter()}>Add Counter</button>&nbsp;&nbsp;
    //   <button>Reset All Counters</button>
    //   <div>
    //     <p>Counter 1</p>
    //     <button
    //       onClick={() => decreaseCounter("first")}
    //       className="counter-btn"
    //     >
    //       -
    //     </button>
    //     <input
    //       type="text"
    //       id="number"
    //       value={firstCounter}
    //       readOnly
    //       className="couter-textbox"
    //     />
    //     <button
    //       onClick={() => increaseCounter("first")}
    //       className="counter-btn"
    //     >
    //       +
    //     </button>
    //   </div>
    //   <br />
    //   <br />
    //   <p>Counter 2</p>
    //   <button onClick={() => decreaseCounter("second")} className="counter-btn">
    //     -
    //   </button>
    //   <input
    //     type="text"
    //     id="number"
    //     value={secondCounter}
    //     readOnly
    //     className="couter-textbox"
    //   />
    //   <button onClick={() => increaseCounter("second")} className="counter-btn">
    //     +
    //   </button>
    //   <br />
    //   <br />
    //   <p>Counter 3</p>
    //   <button onClick={() => decreaseCounter("third")} className="counter-btn">
    //     -
    //   </button>
    //   <input
    //     type="text"
    //     id="number"
    //     value={thirdCounter}
    //     readOnly
    //     className="couter-textbox"
    //   />
    //   <button onClick={() => increaseCounter("third")} className="counter-btn">
    //     +
    //   </button>
    // </div>
  );
};

export default Counter;
