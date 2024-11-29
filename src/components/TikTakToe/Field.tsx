import { useTikTakToeField } from "../../stores/TikTakToeStore/useTikTakToeField"
import Square from "./Square"
import s from './field.module.css'
import { useTikTakToeMove } from "../../stores/TikTakToeStore/useTikTakToeMove"
import { isEndGame, whoIsWin } from "../../utils/tikTakToeWin.utils"
import { useEffect } from "react"
import { useComputerPlayerHook } from "../../hooks/ComputerPlayer"
import Button from "../buttons/Button"
import { useModalStore } from "../../stores/useModalStore"
import { EndTikTakToeGameModal } from "../modal/modalContents/EndTikTakToeGameModal"

const Field = () => {
    const { squaresInStore, setSquaresInStore, isSquareEmpty, resetSquares,
        addInTikTakToeMoveFieldExcluding, resetTikTakToeMoveFieldExcluding } = useTikTakToeField()
    const { whoseMoveInStore, changeWhoseMoveInStore, resetWhoseMoveInStore } = useTikTakToeMove()
    const computerPlayerMove = useComputerPlayerHook()
    const { openModal, closeModal } = useModalStore()

    const onClickRestartGeme = () => {
        resetSquares()
        resetTikTakToeMoveFieldExcluding()
        resetWhoseMoveInStore()
        closeModal()
    }

    const onClickSquare = (index: number) => {
        if(isSquareEmpty(index) && !isEndGame(squaresInStore)) {
            setSquaresInStore(index, whoseMoveInStore)
            addInTikTakToeMoveFieldExcluding(index)
            changeWhoseMoveInStore()
        }
    }

    const openEndGameModal = () => {
        openModal('endGameModal', (<EndTikTakToeGameModal onClickRestartGeme={onClickRestartGeme}/>))
    }

    useEffect(() => {
        if (!isEndGame(squaresInStore)) {
            computerPlayerMove()
        }else{
            openEndGameModal()
        }
    }, [squaresInStore]);

    return (
        <div className={s.fieldAndButton}>
            <div className={s.field}>
                {squaresInStore.map((square, index) => (
                    <Square key={index} index={index} value={square} onClick={onClickSquare}/>
                ))}
            </div>
            <Button
                className={s.restartButton}
                label="Начать заново"
                variable="minor"
                onClick={onClickRestartGeme}
            />
        </div>
    )
}

export default Field