import { create } from 'zustand';
import { XO } from './useTikTakToeMove';

export type difficulty = 'easy' | 'medium' | 'hard'

type Variable = {
    gameDifficulty: difficulty
}

type Action = {
    setGameDifficulty: (value: difficulty) => void,
}

export const useTikTakToeSettings = create<Variable & Action>((set) => ({
    gameDifficulty: 'medium',
    setGameDifficulty: (value: difficulty) =>
        set(() => ({
            gameDifficulty: value
    })),
}));