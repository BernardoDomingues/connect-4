import { boardCols } from "const";
import { PlayerNameAndColorInterface } from "interfaces";
import { atom } from "recoil";
import { Board, Player } from "types";
import { playerColor as playerColorInitialState, playerName as playerNameInitialState } from 'const';

const localStorageEffect = (key: string) => ({setSelf, onSet}: { setSelf: any; onSet: any }) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue: any, _: any, isReset: any) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [
    localStorageEffect('boardState'),
  ]
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
  effects: [
    localStorageEffect('playerState'),
  ]
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
  effects: [
    localStorageEffect('gameOverState'),
  ]
});

export const playerColor = atom<PlayerNameAndColorInterface>({
  key: "playerColor",
  default: playerColorInitialState,
  effects: [
    localStorageEffect('playerColor'),
  ]
});

export const playerName = atom<PlayerNameAndColorInterface>({
  key: "playerName",
  default: playerNameInitialState,
  effects: [
    localStorageEffect('playerName'),
  ]
});

export const isTheGameConfigured = atom<boolean>({
  key: "isTheGameConfigured",
  default: false,
  effects: [
    localStorageEffect('isTheGameConfigured'),
  ]
});
