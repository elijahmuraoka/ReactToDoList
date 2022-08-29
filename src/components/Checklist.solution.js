import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // note a unique id would be better
    const [checkList, setCheckList] = useState([
        { id: "0", item: "hat" },
        { id: "1", item: "sunglasses" },
        { id: "2", item: "water" }
    ]);
    // const handleCheck = (event) => {
    //     var updatedList = [...checked];
    //     if (event.target.checked) {
    //       updatedList = [...checked, event.target.value];
    //     } else {
    //       updatedList.splice(checkList.indexOf(event.target.value), 1);
    //     }
    //     setCheckList(updatedList);
    //   };

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
            <div>
                <button onClick={() => setCheckList([])}>Clear All</button>
                <button>Clear All Selected</button>
            </div>
        </div>
    );
}

export default Checklist;