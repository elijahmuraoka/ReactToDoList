import "../styles/global.css";
import { useState } from "react";
import picture from "../pictures/Cactus.jpeg";

function Checklist() {
  // Exercise 4:
  // Make sure the checkList is apart of the state. Hint: use the useState hook

  // Exercise 5:
  // Enable the Clear All button to clear all items from the list

  // Exercise 6:
  // Enable the Add Item button to add items to the checkList
  const [checklistVal, setChecklistVal] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [cactusCount, setCactusCount] = useState(0);
  return (
    <div className="checklist-card card-container">
      <div className="cactus-count section">
        <div className="stack">
          <h3 className="underline" style={{ marginRight: "5px" }}>
            Cactus Counter
          </h3>
          <div className="count" style={{ marginRight: "10px" }}>
            {cactusCount}
          </div>
        </div>

        {/*
                            Exercise 2:
                            Add an onclick to this image of a cactus. Have it increment the excitement level.
                            */}
        <div className="stack">
          <img
            style={{
              width: "7vw",
              background: "cyan",
              padding: "25px",
              "border-radius": "10px",
            }}
            src={picture}
            alt="cactus"
            onClick={() => {
              console.log("You clicked the cactus.");
              setCactusCount(cactusCount + 1);
            }}
          />
          <span>Click the Cactus!</span>
        </div>
      </div>

      <h1 className="list-header section">To-Do List</h1>
      <div className="buttons-panel section">
        <div>
          <span>Input Task: </span>
          <input
            className="inputs"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </div>
        <div className="split">
          <button
            className="inputs"
            onClick={() => {
              setChecklistVal((previousChecklist) =>
                previousChecklist.concat(inputVal)
              );
              setInputVal("");
            }}
          >
            Add item
          </button>
          <button
            className="inputs"
            onClick={() => {
              setChecklistVal([]);
            }}
          >
            Clear All
          </button>
          {/* <button
            className="delete"
            onClick={() =>
              setChecklistVal((previousChecklist) => {
                previousChecklist.pop();
              })
            }
          >
            Delete
          </button> */}
        </div>
      </div>

      <ul className="checklist section">
        {checklistVal.map((item) => (
          <div>
            <input value={item} type="checkbox" />
            <span className="list-item">{item}</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
