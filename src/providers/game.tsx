import React from "react";
import { PlayersDataInterface } from "interfaces";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import {
  isTheGameConfigured as isTheGameConfiguredState,
  playerColor as playerColorState,
  playerName as playerNameState,
  gameStats as gameStatsState,
  playerState
} from "state";

import { gameStats as gameStatsInitialState } from "const";

interface ContextProps {
  capturePlayerData: (data: PlayersDataInterface) => void;
  backToSetup: () => void;
  updateStats: () => void;
};

const defaultState = {
  capturePlayerData: () => undefined,
  backToSetup: () => undefined,
  updateStats: () => undefined,
};

interface ProviderProps {
  children: JSX.Element;
};

export const GameContext = React.createContext<ContextProps>(defaultState);

export const GameProvider: React.FC<ProviderProps> = ({ children }) => {
  const [gameStats, setGameStats] = useRecoilState(gameStatsState);
  const setIsTheGameConfigured = useSetRecoilState(isTheGameConfiguredState);
  const setPlayerColor = useSetRecoilState(playerColorState);
  const setPlayerName = useSetRecoilState(playerNameState);
  const player = useRecoilValue(playerState)

  const capturePlayerData = (data: PlayersDataInterface) => {
    setPlayerColor({
      1: data.playerOneData.color,
      2: data.playerTwoData.color,
    });
    setPlayerName({
      1: data.playerOneData.name,
      2: data.playerTwoData.name,
    });
    setIsTheGameConfigured(true);
  };

  const backToSetup = () => {
    setIsTheGameConfigured(false);
    setGameStats(gameStatsInitialState);
  };

  const updateStats = () => {
    console.log(player);
    const newGameStats = gameStats;
    if (player === 1) {
      setGameStats({1: newGameStats[1] + 1, 2: newGameStats[2] })
    } else {
      setGameStats({1: newGameStats[1], 2: newGameStats[2] + 1 })
    }
  };

  return (
    <GameContext.Provider
      value={{
        capturePlayerData,
        backToSetup,
        updateStats
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);
