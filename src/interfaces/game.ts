export interface PlayersDataInterface {
  playerOneData: {
    name: string;
    color: string;
  },
  playerTwoData: {
    name: string;
    color: string;
  }
};

export interface PlayerNameAndColorInterface {
  1: string;
  2: string;
};

export interface ColorsProps {
  name: string;
  value: string;
};

export interface GameStatsInterface {
  1: number;
  2: number;
}
