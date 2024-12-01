import { create } from 'zustand';
import { numberOfSquareInGame } from '../../constants/gameField';

type Field = {
  squaresInStore: string[]
  tikTakToeMoveFieldExcluding: number[],
}

type Action = {
  setSquaresInStore: (index: number, value: string) => void
  resetSquares: () => void
  isSquareEmpty: (index: number) => boolean
  addInTikTakToeMoveFieldExcluding: (value: number) => void,
  resetTikTakToeMoveFieldExcluding: () => void
}

export const useTikTakToeField = create<Field & Action>((set, get) => ({
  squaresInStore: Array(numberOfSquareInGame).fill(''),
  tikTakToeMoveFieldExcluding: [],
  setSquaresInStore: (index: number, value: string) =>
    set((state: any) => ({
      squaresInStore: state.squaresInStore.map((square: string, i: number) =>
        i === index ? value : square
      )
    })),
  isSquareEmpty: (index: number) => {
    const { squaresInStore } = get()
    return squaresInStore[index] === ''
  },
  resetSquares: () =>
    set(() => ({
      squaresInStore: Array(numberOfSquareInGame).fill('')
    })),
  addInTikTakToeMoveFieldExcluding: (value: number) =>
    set((state) => ({
      tikTakToeMoveFieldExcluding: [...state.tikTakToeMoveFieldExcluding, value]
    })),
  resetTikTakToeMoveFieldExcluding: () =>
    set(() => ({
      tikTakToeMoveFieldExcluding: []
    })),
}));