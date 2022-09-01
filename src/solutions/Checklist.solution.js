import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // NOTE: ideally each element in the checklist would require a key
    const [checkList, setCheckList] = useState([ "hat", "sunglasses", "water" ]);
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
                    onClick={() => {
                        setCheckList((prevCheckList) => {
                            return prevCheckList.concat([inputVal]);
                        });
                        setInputVal("");
                    }}
                >
                    Add item
                </button>
                <button
                    className="inputs"
                    onClick={() => setCheckList([])}>Clear All</button>
            </div>
        </div>
    );
}

export default Checklist;