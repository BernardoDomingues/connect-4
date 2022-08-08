import React from "react";
import { useRecoilValue } from "recoil";
import { isTheGameConfigured as isTheGameConfiguredState } from "state";
import { Center, Grid, GridItem } from "@chakra-ui/react";

import GameProgress from "components/GameProgress";
import Board from "components/Board";
import LeaderBoard from "components/LeaderBoard";
import GameControls from "components/GameControls";
import Setup from "components/Setup";

const Game: React.FC = () => {
  const isTheGameConfigured = useRecoilValue(isTheGameConfiguredState);

  return (
    isTheGameConfigured ?
      <>
        <Center>
          <GameProgress />
        </Center>
        <Grid templateColumns={['1fr', '1fr', '1fr 1fr']} gap={6} margin={10}>
          <GridItem>
            <Board />
          </GridItem>
          <GridItem>
            <LeaderBoard />
            <GameControls />
          </GridItem>
        </Grid>
      </> :
    <Setup />
  );
};

export default Game;
