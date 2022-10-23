import "../styles/global.css";
import ExplorerPicture from "./ExplorerPicture";

function ExplorerCard() {
  return (
    <div className="explorer-card card-container">
      <div className="heading">
        {/*
                        Exercise 1:
                        Add a Div with your name here
                    */}
        <div className="explorer-profile">
          <h1 className="underline section">Elijah Muraoka</h1>
          <ExplorerPicture />
        </div>
      </div>
      <div>
        <div className="prompt-and-answer section">
          <h3 className="underline">Overview</h3>
          <div>
            Welcome to my simple To-Do List task manager. This application was
            built simply using HTML, CSS, and React JS. Feel free to try it out!
          </div>
        </div>
        <div className="prompt-and-answer section">
          <h3 className="underline">Skills Learned</h3>
          <div>
            <ul>
              <li>Components</li>
              <li>Props</li>
              <li>Hooks</li>
              <li>State Management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExplorerCard;
