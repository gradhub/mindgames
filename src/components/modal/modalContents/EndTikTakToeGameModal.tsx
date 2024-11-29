import { whoIsWin } from "../../../utils/tikTakToeWin.utils"
import { useTikTakToeField } from "../../../stores/TikTakToeStore/useTikTakToeField"
import Button from "../../buttons/Button"

const whoseWinnerText = {
    "player": "Поздравляем! Вы одержали победу.",
    "computerPlayer": "К сожалению в этот раз победил компьютер",
    "drawText": "Патовая ситуация. Попробуйте еще раз"
}

interface EndTikTakToeGameModalProps {
    onClickRestartGeme: () => void
}

export const EndTikTakToeGameModal: React.FC<EndTikTakToeGameModalProps> = (props) => {
    const { onClickRestartGeme } = props
    const squares = useTikTakToeField((s) => s.squaresInStore)

    const getWinnerText = () => {
        const winner = whoIsWin(squares)
        if (winner){
            return winner === 'x' ? whoseWinnerText.player : whoseWinnerText.computerPlayer
        }else{
            return whoseWinnerText.drawText
        }
    }

    const onClickEndGame = () => {
        onClickRestartGeme()
    }

    return (
        <div>
            <h2>Игра окончена</h2>
            <p>{getWinnerText()}</p>
            <Button
                label="Начать сначала"
                variable="major"
                onClick={onClickEndGame}
            />
        </div>
    )
}

export default EndTikTakToeGameModal