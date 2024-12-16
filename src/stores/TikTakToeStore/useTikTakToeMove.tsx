import { create } from 'zustand';

export type XO = 'x' | 'o'

type Variables = {
  playerSymbol: XO,
  computerSymbol: XO,
  whoseMoveInStore: XO,
}

type Actions = {
  setPlayerSymbol: (value: XO) => void,
  setComputerSymbol: (value: XO) => void,
  setWhoseMoveInStore: (value: XO) => void,
  changeWhoseMoveInStore: () => void,
  resetWhoseMoveInStore: () => void,
}

const getDefaultPlayerSymbol = (): XO => {
  return 'x'
}

const getDefaultComputerSymbol = (): XO => {
  return 'o'
}

const getDefaultWhoseMoveInStore = (): XO => {
  return 'x'
}

export const useTikTakToeMove = create<Variables & Actions>((set) => ({
  playerSymbol: getDefaultPlayerSymbol(),
  computerSymbol: getDefaultComputerSymbol(),
  whoseMoveInStore: getDefaultWhoseMoveInStore(),
  setWhoseMoveInStore: (value: XO) =>
    set(() => ({
      whoseMoveInStore: value
    })),
  setPlayerSymbol: (value: XO) =>
    set(() => ({
      playerSymbol: value
    })),
  setComputerSymbol: (value: XO) =>
    set(() => ({
      computerSymbol: value
    })),
  changeWhoseMoveInStore: () =>
    set((state) => ({
      whoseMoveInStore: state.whoseMoveInStore === 'x' ? 'o' : 'x'
    })),
  resetWhoseMoveInStore: () =>
    set((state) => ({
      whoseMoveInStore: getDefaultWhoseMoveInStore()
    })),
}));