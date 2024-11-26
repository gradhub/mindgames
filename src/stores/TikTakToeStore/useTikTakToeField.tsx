import { create } from 'zustand';

type Field = {
  squares: string[]
  setSquare: (value: string, index: number) => void
  resetSquares: () => void
  isSquareEmpty: (index: number) => boolean
}

export const useTikTakToeField = create<Field>((set, get) => ({
  squares: Array(9).fill(''),
  setSquare: (value: string, index: number) =>
    set((state: any) => ({
      squares: state.squares.map((square: string, i: number) =>
        i === index ? value : square
      )
    })),
  isSquareEmpty: (index: number) => {
    const { squares } = get()
    return squares[index] === ''
  },
  resetSquares: () =>
    set(() => ({
      squares: Array(9).fill('')
    })),
}));