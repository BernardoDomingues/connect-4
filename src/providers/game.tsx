import React from 'react';
import { PlayersDataInterface } from 'interfaces';
import { useSetRecoilState } from 'recoil';
import {
  isTheGameConfigured as isTheGameConfiguredState,
  playerColor as playerColorState,
  playerName as playerNameState
} from 'state';

interface ContextProps {
  capturePlayerData: (data: PlayersDataInterface) => void;
  backToSetup: () => void;
};

const defaultState = {
  capturePlayerData: () => undefined,
  backToSetup: () => undefined,
};

interface ProviderProps {
  children: JSX.Element;
};

export const GameContext = React.createContext<ContextProps>(defaultState);

export const GameProvider: React.FC<ProviderProps> = ({ children }) => {
  const setIsTheGameConfigured = useSetRecoilState(isTheGameConfiguredState);
  const setPlayerColor = useSetRecoilState(playerColorState);
  const setPlayerName = useSetRecoilState(playerNameState);

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
  };

  return (
    <GameContext.Provider
      value={{
        capturePlayerData,
        backToSetup
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);
