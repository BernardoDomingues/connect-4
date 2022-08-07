import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { gameOverState, playerState, playerName as PlayerNameState } from "state";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const playerName = useRecoilValue(PlayerNameState);
  const name = playerName[player];

  return (
    <Heading as="h3" size="lg">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>
  );
};

export default GameProgress;
