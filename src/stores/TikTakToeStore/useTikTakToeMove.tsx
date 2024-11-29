import { create } from 'zustand';

export type XO = 'x' | 'o'

type Variables = {
  whoseMoveInStore: XO,
}

type Actions = {
  setWhoseMoveInStore: (value: XO) => void,
  changeWhoseMoveInStore: () => void,
  resetWhoseMoveInStore: () => void,
}

const getDefaultWhoseMoveInStore = (): XO => {
  return 'x'
}

export const useTikTakToeMove = create<Variables & Actions>((set) => ({
  whoseMoveInStore: getDefaultWhoseMoveInStore(),
  setWhoseMoveInStore: (value: XO) =>
    set(() => ({
      whoseMoveInStore: value
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