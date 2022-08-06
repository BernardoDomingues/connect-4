import React, { useState } from 'react';
import { PlayersDataInterface, PlayerNameAndColorInterface } from 'interfaces';
import { playerColor as playerColorInitialState, playerName as playerNameInitialState } from 'const';

interface ContextProps {
  capturePlayerData: (data: PlayersDataInterface) => void;
  playerColor: PlayerNameAndColorInterface;
  playerName: PlayerNameAndColorInterface;
  isTheGameConfigured: boolean;
};

const defaultState = {
  capturePlayerData: () => undefined,
  playerColor: playerColorInitialState,
  playerName: playerColorInitialState,
  isTheGameConfigured: false,
};

interface ProviderProps {
  children: JSX.Element;
};

export const GameContext = React.createContext<ContextProps>(defaultState);

export const GameProvider: React.FC<ProviderProps> = ({ children }) => {
  const [playerColor, setPlayerColor] = useState<PlayerNameAndColorInterface>(playerColorInitialState);
  const [playerName, setPlayerName] = useState<PlayerNameAndColorInterface>(playerNameInitialState);
  const [isTheGameConfigured, setIsTheGameConfigured] = useState<boolean>(false);

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

  return (
    <GameContext.Provider
      value={{
        capturePlayerData,
        playerColor,
        playerName,
        isTheGameConfigured
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => React.useContext(GameContext);
