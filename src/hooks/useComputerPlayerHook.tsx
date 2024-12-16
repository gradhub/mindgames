import random from "random";
import { useTikTakToeField } from "../stores/TikTakToeStore/useTikTakToeField";
import { useTikTakToeMove } from "../stores/TikTakToeStore/useTikTakToeMove";
import { useTikTakToeSettings } from "../stores/TikTakToeStore/useTikTakToeSettings";
import { whoIsWin } from "../utils/tikTakToeWin.utils";

export const useComputerPlayerHook = () => {
    const { squaresInStore, setSquaresInStore, 
        tikTakToeMoveFieldExcluding, addInTikTakToeMoveFieldExcluding } = useTikTakToeField()
    const { playerSymbol, computerSymbol, whoseMoveInStore, changeWhoseMoveInStore } = useTikTakToeMove()
    const { gameDifficulty } = useTikTakToeSettings()

    const getRandomIndexWithExcluding = (min: number, max: number, exclude: number[]) => {
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min)
        const filteredNumbers = numbers.filter((num) => !exclude.includes(num))
        const randomIndex = random.int(0, filteredNumbers.length - 1)
        return filteredNumbers[randomIndex]
    }

    const getMinIndexWithExcluding = (min: number, max: number, exclude: number[]) => {
        const numbers = Array.from({ length: max - min + 1 }, (_, i) => i + min)
        const filteredNumbers = numbers.filter((num) => !exclude.includes(num))
        return filteredNumbers[0]
    }

    const arrayInexInFieldComputerPlayerMove = (max: number, excludingArray: number[]) => {
        switch (gameDifficulty) {
            case "easy":
              return getMinIndexWithExcluding(0, max, excludingArray)
            case "medium":
              return getRandomIndexWithExcluding(0, max, excludingArray)
            case "hard":
              return getSmartIndex(squaresInStore, computerSymbol, playerSymbol)
            default:
              return getRandomIndexWithExcluding(0, max, excludingArray)
        }
    }

    const computerPlayerMove = () => {
        if( whoseMoveInStore === computerSymbol){
            const index = arrayInexInFieldComputerPlayerMove(squaresInStore.length - 1, tikTakToeMoveFieldExcluding)
            setSquaresInStore(index, whoseMoveInStore)
            addInTikTakToeMoveFieldExcluding(index)
            changeWhoseMoveInStore()
        }
    }

    const minimax = (
        squaresInStore: string[],
        depth: number, 
        isComputerPlayMove: boolean,
        computerSymbol: string,
        playerSymbol: string,
    ): number => {
        const winner = whoIsWin(squaresInStore)
        if (winner === 'o') return 10 - depth
        if (winner === 'x') return depth - 10
        if (!squaresInStore.includes("")) return 0
        if (isComputerPlayMove) {
            let bestScore = -Infinity
            for (let i = 0; i < squaresInStore.length; i++) {
                if (squaresInStore[i] === "") {
                    squaresInStore[i] = computerSymbol
                    const score = minimax(squaresInStore, depth + 1, false, computerSymbol, playerSymbol)
                    squaresInStore[i] = ""
                    bestScore = Math.max(score, bestScore)
                }
            }
            return bestScore
        } else {
            let bestScore = Infinity
            for (let i = 0; i < squaresInStore.length; i++) {
                if (squaresInStore[i] === "") {
                    squaresInStore[i] = playerSymbol
                    const score = minimax(squaresInStore, depth + 1, true, computerSymbol, playerSymbol)
                    squaresInStore[i] = ""
                    bestScore = Math.min(score, bestScore)
                }
            }
            return bestScore
        }
    }

    const getSmartIndex = (board: string[], computer: string, player: string): number => {
        let bestScore = -Infinity
        let index = -1
      
        for (let i = 0; i < board.length; i++) {
            if (board[i] === "") {
                board[i] = computer
                const score = minimax(board, 0, false, computer, player)
                board[i] = ""
        
                if (score > bestScore) {
                bestScore = score
                index = i
                }
            }
        }
      
        return index
    }

    return computerPlayerMove
}