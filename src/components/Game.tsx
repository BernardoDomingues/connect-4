import React from "react";
import { useRecoilValue } from "recoil";
import { Container, VStack } from "@chakra-ui/react";
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
      <Container py={4} as={VStack}>
        <GameProgress />
        <Board />
        <GameControls />
        <LeaderBoard />
      </Container> :
    <Setup />
  );
};

export default Game;
