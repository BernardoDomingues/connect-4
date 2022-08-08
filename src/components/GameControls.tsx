import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useGame } from "providers/game";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const GameControls: FC = () => {
  const { backToSetup } = useGame();
  const { colorMode, toggleColorMode } = useColorMode();

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
        backToSetup();
      }}>
        Back to Setup
      </Button>
      <Button borderRadius="20px" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default GameControls;
