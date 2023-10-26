import  React, { Fragment } from 'react'

export default function GameOver(props) {
    return (props.show?
        <div id="game_over">
            <div>
                Parabéns, você completou o jogo!
            </div>
        <button id="restart" onClick={props.handleRestart}>Jogar Novamente</button>
    </div> : <Fragment/> 
    )
}