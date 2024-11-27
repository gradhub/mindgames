import { create } from 'zustand';

type XO = 'x' | 'o'

const getStartMoveArray = () => {
  const tikTakToe3x3Field = [0,1,2,3,4,5,6,7,8,9]
  return tikTakToe3x3Field
}

type Variables = {
  whoseMoveInStore: XO,
  tikTakToeMoveField: number[],
  tikTakToeMoveFieldExcluding: number[],
}

type Actions = {
  setWhoseMoveInStore: (value: XO) => void,
  changeWhoseMoveInStore: () => void,
  getTikTakToeMoveField: () => number[],
  setTikTakToeMoveField: (array: number[]) => void,
  addInTikTakToeMoveFieldExcluding: (value: number) => void,
}

export const useTikTakToeMove = create<Variables & Actions>((set, get) => ({
  whoseMoveInStore: 'x',
  tikTakToeMoveField: getStartMoveArray(),
  tikTakToeMoveFieldExcluding: [],
  setWhoseMoveInStore: (value: XO) =>
    set(() => ({
      whoseMoveInStore: value
    })),
  changeWhoseMoveInStore: () =>
    set((state) => ({
      whoseMoveInStore: state.whoseMoveInStore === 'x' ? 'o' : 'x'
    })),
  getTikTakToeMoveField: () => {
    return get().tikTakToeMoveField
  },
  setTikTakToeMoveField: (array: number[]) =>
    set(() => ({
      tikTakToeMoveField: array
    })),
  addInTikTakToeMoveFieldExcluding: (value: number) =>
    set((state) => ({
      tikTakToeMoveFieldExcluding: [...state.tikTakToeMoveFieldExcluding, value]
    })),
}));