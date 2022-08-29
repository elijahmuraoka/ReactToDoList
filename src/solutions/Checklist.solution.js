import '../styles/global.css'
import { useState } from "react";
import { nanoid } from "nanoid";

function Checklist() {
    // note a unique id would be better
    const [checkList, setCheckList] = useState([
        { id: "0", item: "hat" },
        { id: "1", item: "sunglasses" },
        { id: "2", item: "water" }
    ]);
    const [inputVal, setInputVal] = useState("");


    return (
        <div className="checklist-card">
            <h1 className="list-header">What to Pack</h1>
            <ul >
                {checkList.map((item, index) => (
                    <div key={item.id}>
                        <input value={item.id} type="checkbox" />
                        <span className="list-item">{item.item}</span>
                    </div>
                ))}
            </ul>

            <div className="buttons-panel">
                <input className="inputs" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
                <button
                    className="inputs"
                    onClick={() => {
                        setCheckList((prevCheckList) => {
                            return prevCheckList.concat([{ id: nanoid(), item: inputVal }]);
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