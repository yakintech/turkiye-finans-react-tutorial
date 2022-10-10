import React from 'react'
import Score from './Score'

function Game(props) {
    return (<>
        <div>
            <h1 style={{backgroundColor:'aqua'}}>Game</h1>
            <Score score1={props.score1} score2={props.score2}></Score>
        </div>

    </>
    )
}

export default Game