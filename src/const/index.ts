import { Player } from "types";
import { ColorsProps } from "interfaces";

export const boardCols = 7;
export const boardRows = 6;

export const playerColor: Record<Player, string> = {
  1: "#f10000",
  2: "#ece100",
};

export const playerName: Record<Player, string> = {
  1: "Red",
  2: "Yellow",
};

export const avaliableColors: ColorsProps[] = [
  {
    name: 'Select a color...',
    value: ''
  },
  {
    name: 'Red',
    value: '#f10000'
  },
  {
    name: 'Yellow',
    value: '#ece100'
  },
  {
    name: 'Green',
    value: '#008000'
  },
  {
    name: 'Blue',
    value: '#0000ff'
  },
  {
    name: 'Orange',
    value: '#ff8c00'
  },
  {
    name: 'Pink',
    value: '#ff1493'
  },
  {
    name: 'Black',
    value: '#000000'
  }
];
