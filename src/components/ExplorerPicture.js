import picture from "../pictures/chefSquishy.png";
import "../styles/global.css";

/*
Exercise 3:
add your picture here
*/
function ExplorerPicture() {
  return (
    <img
      style={{ objectFit: "cover", borderRadius: "25px" }}
      src={picture}
      className="explorer-picture"
    ></img>
  );
}

export default ExplorerPicture;
