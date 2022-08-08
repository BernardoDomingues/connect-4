import React from "react";
import { useRecoilValue } from "recoil";
import { isTheGameConfigured as isTheGameConfiguredState } from "state";
import Setup from "components/Setup";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import LeaderBoard from "components/LeaderBoard";

const Game: React.FC<{}> = () => {
  const isTheGameConfigured = useRecoilValue(isTheGameConfiguredState);

  return (
    isTheGameConfigured ?
      <>
        <GameProgress />
        <Board />
        <GameControls />
        <LeaderBoard />
      </> :
    <Setup />
  );
};

export default Game;
