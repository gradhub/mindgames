import random from "random";
import { useTikTakToeMove } from "../stores/TikTakToeStore/useTikTakToeMove";

export const useComputerPlayerHook = () => {
    const excludingArray = useTikTakToeMove((s) => s.tikTakToeMoveFieldExcluding)
    const addInTikTakToeMoveFieldExcluding = useTikTakToeMove((s) => s.addInTikTakToeMoveFieldExcluding)

    const getRandomIndexExcluding = (min: number, max: number, exclude: number[]) => {
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min)
        const filteredNumbers = numbers.filter((num) => !exclude.includes(num))
        const randomIndex = random.int(0, filteredNumbers.length - 1)
        return filteredNumbers[randomIndex]
      };

    const arrayInexInFieldComputerPlayerMove = (tikTakToeMoveField: number[]) => {
        const index = getRandomIndexExcluding(tikTakToeMoveField[0], tikTakToeMoveField[tikTakToeMoveField.length - 1], excludingArray)
        addInTikTakToeMoveFieldExcluding(index)
        return index
    }

    return arrayInexInFieldComputerPlayerMove
}