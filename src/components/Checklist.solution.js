import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    // note a unique id would be better
    const [todoList, setTodoList] = useState([
        { id: "0", item: "hat" },
        { id: "1", item: "sunglasses" },
        { id: "2", item: "water" }
    ]);
    const convertItemIntoList = (item) => {
        return (
            <div>
                <input value={item} type="checkbox" />
                {item.item}
            </div>
        );
    };
    return (
        <div>
            <h1>What to Pack</h1>
            <ul>
                {todoList.map(convertItemIntoList)}
            </ul>
        </div>
    );
}

export default Checklist;