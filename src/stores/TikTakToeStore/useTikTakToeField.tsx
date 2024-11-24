import { create } from 'zustand';

type Field = {
  squares: string[]
  setSquare: (value: string, index: number) => void
  resetSquares: () => void
}

export const useTikTakToeField = create<Field>((set) => ({
  squares: Array(9).fill('-'),
  setSquare: (value: string, index: number) =>
    set((state: any) => ({
      squares: state.squares.map((square: string, i: number) =>
        i === index ? value : square
      )
    })),
  resetSquares: () =>
    set(() => ({
      squares: Array(9).fill('-')
    })),
}));