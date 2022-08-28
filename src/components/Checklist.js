import '../styles/global.css'

function Checklist() {
    // TODO: use the useState hook to replace the checklist array
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
