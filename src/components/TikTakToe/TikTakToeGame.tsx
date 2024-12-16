import { useTikTakToeField } from "../../stores/TikTakToeStore/useTikTakToeField"
import Square from "./Square"
import s from './tikTakToeGame.module.css'
import { useTikTakToeMove } from "../../stores/TikTakToeStore/useTikTakToeMove"
import { isEndGame, whoIsWin } from "../../utils/tikTakToeWin.utils"
import { useEffect } from "react"
import { useComputerPlayerHook } from "../../hooks/useComputerPlayerHook"
import Button from "../buttons/Button"
import { useModalStore } from "../../stores/useModalStore"
import { EndTikTakToeGameModal } from "../modal/modalContents/EndTikTakToeGameModal"
import { useNavigate } from "react-router-dom"
import { useTikTakToeHook } from '../../hooks/useTikTakToeHook'
import { MIND_GAME_MENU } from "../../constants/routerPath"

const TikTakToeGame = () => {
    const { squaresInStore, setSquaresInStore, isSquareEmpty,
        addInTikTakToeMoveFieldExcluding } = useTikTakToeField()
    const { playerSymbol, changeWhoseMoveInStore } = useTikTakToeMove()
    const computerPlayerMove = useComputerPlayerHook()
    const { openModal, closeModal } = useModalStore()
    const resetTikTakToeStores = useTikTakToeHook()
    const navigate = useNavigate()

    const onClickRestartGeme = () => {
        resetTikTakToeStores()
        closeModal()
    }

    const onClickExitInMenu = () => {
        resetTikTakToeStores()
        closeModal()
        navigate(MIND_GAME_MENU)
    }

    const onClickSquare = (index: number) => {
        if(isSquareEmpty(index) && !isEndGame(squaresInStore)) {
            setSquaresInStore(index, playerSymbol)
            addInTikTakToeMoveFieldExcluding(index)
            changeWhoseMoveInStore()
        }
    }

    const openEndGameModal = () => {
        openModal('endGameModal', (<EndTikTakToeGameModal onClickRestartGeme={onClickRestartGeme} onClickExitInMenu={onClickExitInMenu} />))
    }

    useEffect(() => {
        if (!isEndGame(squaresInStore)) {
            computerPlayerMove()
        }else{
            openEndGameModal()
        }
    }, [squaresInStore]);

    return (
        <div className={s.gameBody}>
            <h1 className={s.gameTitle}>
                Крестики - Нолики
            </h1>
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
        </div>
    )
}

export default TikTakToeGame