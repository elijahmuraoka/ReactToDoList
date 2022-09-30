import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // Exercise 4: 
    // Make sure the checkList is apart of the state. Hint: use the useState hook
    
    // Exercise 5:
    // Enable the Clear All button to clear all items from the list

    // Exercise 6: 
    // Enable the Add Item button to add items to the checkList
    const checkList = ["hat", "sunglasses", "water"];

    const [inputVal, setInputVal] = useState("");
    return (
        <div className="checklist-card">
            <h1 className="list-header">What to Pack</h1>
            <ul >
                {checkList.map((item) => (
                    <div>
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
