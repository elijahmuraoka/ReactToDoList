
function Checklist() {
    // TODO: use the useState hook to replace the checklist array
    const checkList = ["hat", "sunglasses", "water"];
    return (
        <div>
            <h1>What to Pack</h1>
            <ul >
                {checkList.map((item, index) => (
                    <li key={index}>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Checklist;
