import React from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, playerState, playerName as PlayerNameState } from "state";
import { Heading } from "@chakra-ui/react";

const GameProgress: React.FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const playerName = useRecoilValue(PlayerNameState);
  const name = playerName[player];

  return (
    <Heading as="h1">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>
  );
};

export default GameProgress;
