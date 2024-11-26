import { create } from 'zustand';

type XO = 'x' | 'o'

type Variables = {
  whoseMove: XO,
}

type Actions = {
  setWhoseMove: (value: XO) => void,
  changeWhoseMove: () => void,
}

export const useTikTakToeMove = create<Variables & Actions>((set) => ({
  whoseMove: 'x',
  setWhoseMove: (value: XO) =>
    set(() => ({
      whoseMove: value
    })),
  changeWhoseMove: () =>
    set((state) => ({
      whoseMove: state.whoseMove === 'x' ? 'o' : 'x'
    })),
}));