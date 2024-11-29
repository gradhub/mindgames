import random from "random";
import { useTikTakToeField } from "../stores/TikTakToeStore/useTikTakToeField";
import { useTikTakToeMove } from "../stores/TikTakToeStore/useTikTakToeMove";

export const useComputerPlayerHook = () => {
    const { squaresInStore, setSquaresInStore, 
        tikTakToeMoveFieldExcluding, addInTikTakToeMoveFieldExcluding } = useTikTakToeField()
    const { whoseMoveInStore, changeWhoseMoveInStore } = useTikTakToeMove()

    const getRandomIndexWithExcluding = (min: number, max: number, exclude: number[]) => {
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min)
        const filteredNumbers = numbers.filter((num) => !exclude.includes(num))
        const randomIndex = random.int(0, filteredNumbers.length - 1)
        return filteredNumbers[randomIndex]
      }

    const arrayInexInFieldComputerPlayerMove = (max: number, excludingArray: number[]) => {
        const index = getRandomIndexWithExcluding(0, max, excludingArray)
        return index
    }

    const computerPlayerMove = () => {
        if( whoseMoveInStore === 'o'){
            const index = arrayInexInFieldComputerPlayerMove(squaresInStore.length - 1, tikTakToeMoveFieldExcluding)
            setSquaresInStore(index, whoseMoveInStore)
            addInTikTakToeMoveFieldExcluding(index)
            changeWhoseMoveInStore()
        }
    }

    return computerPlayerMove
}