import React from 'react';
import { useGame } from 'providers/game';
import Setup from "components/Setup";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";

const Game: React.FC<{}> = () => {
  const { isTheGameConfigured } = useGame();

  return (
    isTheGameConfigured ?
      <>
        <Board />
        <GameControls />
        <GameProgress />
      </> :
    <Setup />
  );
};

export default Game;
