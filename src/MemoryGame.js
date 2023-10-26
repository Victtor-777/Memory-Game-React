import React, {useState, useEffect} from 'react'
import GameOver from './components/GameOver'
import GameBoard from './components/GameBoard'
import game from './game/game'

export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false)
    const [cards, setCards] = useState([])

    useEffect(() => {
        setCards(game.create_cards())
    }, [])

    function restart() {
        game.clear_cards()
        setCards(game.create_cards())
        setGameOver(false)
    }

    function handleFlip(card) {
        if (game.set_card(card.id)){
            if (game.second_card){
                if (game.check_match()){
                    game.clear_cards();
                    if (game.check_gameover()){
                        // game over
                        setGameOver(true)
                    }
                } else{
                    setTimeout(() => {
                        // no match
                        game.unflip_cards()
                        setCards([...game.cards])
                    }, 1000);
                }
            }
        }
        setCards([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}