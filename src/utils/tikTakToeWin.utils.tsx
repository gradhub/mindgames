const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

export const isEndGame = (field: string[]) => {
    return whoIsWin(field) ? true : isFieldFilled(field)
}

const isFieldFilled = (field: string[]) => {
    for(let square of field){
        if(square === '') return false
    }
    return true
}

export const whoIsWin = (field: string[]) => {
    for(let combination of winningCombinations){
        if(field[combination[0]] !== '' && field[combination[0]] === field[combination[1]] && field[combination[1]] === field[combination[2]]) {
            return field[combination[0]]
        }
    }
    return null
}