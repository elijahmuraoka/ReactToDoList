import picture from "../pictures/Cactus.jpeg"
import '../styles/global.css'

/*
Exercise 3:
add your picture here
*/
function ExplorerPicture() {
    return (
        <div className="explorer-picture">
            <img style={{ objectFit: 'cover', borderRadius: '25px' }} src={picture}></img>
        </div>
    )
}

export default ExplorerPicture;