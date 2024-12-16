import { whoIsWin } from "../../../utils/tikTakToeWin.utils"
import { useTikTakToeField } from "../../../stores/TikTakToeStore/useTikTakToeField"
import Button from "../../buttons/Button"
import s from './endTikTakToeGameModal.module.css'
import { useTikTakToeMove } from "../../../stores/TikTakToeStore/useTikTakToeMove"

const whoseWinnerText = {
    "player": "Поздравляем! Вы одержали победу.",
    "computerPlayer": "К сожалению в этот раз победил компьютер",
    "drawText": "Патовая ситуация. Попробуйте еще раз"
}

interface EndTikTakToeGameModalProps {
    onClickRestartGeme: () => void
    onClickExitInMenu: () => void
}

export const EndTikTakToeGameModal: React.FC<EndTikTakToeGameModalProps> = (props) => {
    const { playerSymbol } = useTikTakToeMove()
    const { onClickRestartGeme, onClickExitInMenu } = props
    const squares = useTikTakToeField((s) => s.squaresInStore)

    const getWinnerText = () => {
        const winner = whoIsWin(squares)
        if (winner){
            return winner === playerSymbol ? whoseWinnerText.player : whoseWinnerText.computerPlayer
        }else{
            return whoseWinnerText.drawText
        }
    }

    const onClickEndGame = () => {
        onClickRestartGeme()
    }

    return (
        <div className={s.modalBody}>
            <h2>Игра окончена</h2>
            <p>{getWinnerText()}</p>
            <div className={s.modalButtonGroup}>
                <Button
                    label="Вернуться в меню"
                    variable="major"
                    onClick={onClickExitInMenu}
                />
                <Button
                    label="Начать сначала"
                    variable="major"
                    onClick={onClickEndGame}
                />
            </div>
        </div>
    )
}

export default EndTikTakToeGameModal