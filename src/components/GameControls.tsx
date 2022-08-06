import { Button } from "@chakra-ui/react";
import { useGame } from "providers/game";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const GameControls: FC = () => {
  const { backToMenu } = useGame();

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
      <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)}>
        Reset
      </Button>
      <Button onClick={() => {
        handleReset();
        backToMenu();
      }}>
        Back to Setup
      </Button>
    </>
  );
};

export default GameControls;
