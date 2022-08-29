import '../styles/global.css'

function Checklist() {
    // Exercise 4: 
    // use the useState hook to replace the checklist array
    // Exercise 5: 
    // enable button to clear all elements
    // Exercise 6: 
    // add items to the checklist
    // Exercise 7: 
    // enable button to clear selected elements
    const checkList = ["hat", "sunglasses", "water"];
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
        </div>
    );
}

export default Checklist;
