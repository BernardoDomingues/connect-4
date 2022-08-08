import { Button } from "@chakra-ui/react";
import { useGame } from "providers/game";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const GameControls: FC = () => {
  const { backToSetup } = useGame();

  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);

  const handleReset = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  return (
    <>
      <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)} colorScheme="teal" width="50%">
        Reset
      </Button>
      <Button colorScheme="teal" width="50%" onClick={() => {
        handleReset();
        backToSetup();
      }}>
        Back to Setup
      </Button>
    </>
  );
};

export default GameControls;
