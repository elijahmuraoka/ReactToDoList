import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // note a unique id would be better
    const [checkList, setCheckList] = useState([
        { id: "0", item: "hat" },
        { id: "1", item: "sunglasses" },
        { id: "2", item: "water" }
    ]);
    return (
        <div className="checklist-card">
            <h1 className="list-header">What to Pack</h1>
            <ul >
                {checkList.map((item) => (
                    <div key={item.index}>
                        <input value={item.item} type="checkbox" />
                        <span className="list-item">{item.item}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Checklist;