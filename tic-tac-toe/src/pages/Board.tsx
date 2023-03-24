import { useState, useEffect } from "react";
import { Grid } from 'semantic-ui-react';
import Square from "../components/Square";

type Player = 'X' | 'O' | null;

const Board: React.FC = () => {
    const activePlayer = Math.round(Math.random() + 1) === 1 ? 'X' : 'O';
   
    const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>(activePlayer);
    const [winner, setWinner] = useState<string | null>(null);

    useEffect(() => {
        const winner = calculateWinner(squares);
        console.log(winner);
        if (winner) {
            setWinner(`${winner} is the Winner`)
        } else if (!winner && !squares.filter(square => !square).length) {
            setWinner('Both players won, Reload for New Game')
        }
    })

    const setSquareValue = (index: number) => {
        const data = squares.map((value, i) => {
            if (index === i) {
                return currentPlayer;
            }
            return value;
        })
        setSquares(data);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    const calculateWinner = (squares: Player[]) => {
        const possibleWinningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        return possibleWinningCombinations.map(combo => {
            const [a, b, c] = combo;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
            return null;
        }).filter(data => data)[0];
    }

    return (
        <div className='board-wrapper'>
            {
                winner ? <p>{winner}</p> 
                : <p>Hey {currentPlayer}, It's your Turn</p>
            }
            <Grid columns={3} centered>
            {
                Array(9).fill(null).map((_, index) => (
                    <Grid.Column className="board-column" key={index}>
                        <Square 
                            key={index}
                            onClick={() => setSquareValue(index)}
                            value={squares[index]}
                            winner={winner}
                        />
                    </Grid.Column>
                ))
            }
            </Grid>
        </div>
    )
}

export default Board;