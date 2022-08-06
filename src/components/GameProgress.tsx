import { Heading } from "@chakra-ui/react";
import { useGame } from "providers/game";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, playerState } from "state";

const GameProgress: FC = () => {
  const { playerName } = useGame()

  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const name = playerName[player];

  return (
    <Heading as="h3" size="lg">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>
  );
};

export default GameProgress;
