import '../styles/global.css'
import picture from "../pictures/Cactus.jpeg"
import React, { useState} from 'react'

function ExplorerCardSolution() {
    const [excitement, setExcitement] = useState(0)
    return (
        <div className="explorer-card">
            <div className='heading'>
                <div>NAME</div>
                <div className='excitement'>
                    <div style={{ marginRight: "15px" }}>Excitement</div>
                        <div style={{ marginRight: "15px" }}>{excitement}</div>
                        <img style={{ width: '20px' }} src={picture} alt="cactus" onClick={(e) => setExcitement(prev => prev + 1)}/>
                </div>
            </div>
            <div className="prompt-and-answer">
                <div className='explorer-card-prompt'>What I learned today</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
            </div>
            <div className="prompt-and-answer">
                <div className='explorer-card-prompt'>Friends I made today</div>
                <div>Jess, Karyna</div>
            </div>
            <div className="prompt-and-answer">
                <div className='explorer-card-prompt'>If u found a genie what would ur 3 wishes be</div>
                <div>Wishes Here</div>
            </div>
        </div>
    )
}

export default ExplorerCardSolution

