import { useTikTakToeField } from "../../stores/TikTakToeStore/useTikTakToeField"
import Square from './Square'
import s from './field.module.css'
import { useTikTakToeMove } from "../../stores/TikTakToeStore/useTikTakToeMove"
import { isEndGame, whoIsWin } from "../../utils/tikTakToeWin.utils"
import { useEffect, useState } from "react"
import { useComputerPlayerHook } from "../../hooks/ComputerPlayer"

const Field = () => {
    const { squares, setSquare, isSquareEmpty } = useTikTakToeField()
    const { changeWhoseMoveInStore, whoseMoveInStore, tikTakToeMoveField } = useTikTakToeMove()
    const arrayInexInFieldComputerPlayerMove = useComputerPlayerHook()
    const addInTikTakToeMoveFieldExcluding = useTikTakToeMove((s) => s.addInTikTakToeMoveFieldExcluding)
    const [whoseMove, setWhoseMove] = useState(whoseMoveInStore)

    const changeWhoseMove = () => {
        setWhoseMove(whoseMove === 'x' ? 'o' : 'x')
    }

    const onClickSquareHandler = (index: number) => {
        if(isSquareEmpty(index) && !isEndGame(squares)) {
            setSquare(whoseMove, index)
            addInTikTakToeMoveFieldExcluding(index)
            changeWhoseMove()
            const computerMoveIndex = arrayInexInFieldComputerPlayerMove(tikTakToeMoveField)
            console.log('computerMoveIndex',computerMoveIndex)
            setSquare(whoseMove, computerMoveIndex)
            addInTikTakToeMoveFieldExcluding(computerMoveIndex)
            changeWhoseMove()
        }
    }

    useEffect(() => {
        if (isEndGame(squares)) {
            console.log(whoIsWin(squares));
        }
    }, [squares]);

    return (
        <div className={s.field}>
            {squares.map((square, index) => (
                <Square key={index} index={index} value={square} onClick={onClickSquareHandler}/>
            ))}
        </div>
    )
}

export default Field