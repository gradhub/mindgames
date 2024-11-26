import { useTikTakToeField } from "../../stores/TikTakToeStore/useTikTakToeField"
import Square from './Square'
import s from './field.module.css'
import { useTikTakToeMove } from "../../stores/TikTakToeStore/useTikTakToeMove"
import { isEndGame, whoIsWin } from "../../utils/tikTakToeWin.utils"
import { useEffect } from "react"

const Field = () => {
    const { squares, setSquare, isSquareEmpty } = useTikTakToeField()
    const { changeWhoseMove, whoseMove } = useTikTakToeMove()


    const onClickSquareHandler = (index: number) => {
        if(isSquareEmpty(index) && !isEndGame(squares)) {
            setSquare(whoseMove, index)
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