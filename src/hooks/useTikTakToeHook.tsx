import { useTikTakToeField } from "../stores/TikTakToeStore/useTikTakToeField"
import { useTikTakToeMove } from "../stores/TikTakToeStore/useTikTakToeMove"

export const useTikTakToeHook = () => {
    const resetSquares = useTikTakToeField((s) => s.resetSquares)
    const resetTikTakToeMoveFieldExcluding = useTikTakToeField((s) => s.resetTikTakToeMoveFieldExcluding)
    const resetWhoseMoveInStore = useTikTakToeMove((s) => s.resetWhoseMoveInStore)

    const resetTikTakToeStores = () => {
        resetSquares()
        resetTikTakToeMoveFieldExcluding()
        resetWhoseMoveInStore()
    }

    return resetTikTakToeStores
}