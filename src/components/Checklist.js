import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // Exercise 4: 
    // use the useState hook to replace the checklist array, hint, each item will require key
    // Exercise 5: 
    // enable button to clear all elements
    // Exercise 6: 
    // add items to the checklist
    const checkList = ["hat", "sunglasses", "water"];

    const [inputVal, setInputVal] = useState("");
    return (
        <div className="checklist-card">
            <h1 className="list-header">What to Pack</h1>
            <ul >
                {checkList.map((item, index) => (
                    <div key={index}>
                        <input value={item} type="checkbox" />
                        <span className="list-item">{item}</span>
                    </div>
                ))}
            </ul>
            <div className="buttons-panel">
                <input className="inputs" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button
                    className="inputs"
                //onClick={}
                >
                    Add item
                </button>
                <button
                    className="inputs"
                //onClick={}
                >Clear All</button>
            </div>
        </div>
    );
}

export default Checklist;
