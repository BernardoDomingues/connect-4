import React from "react";
import { useGame } from "providers/game";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";
import { VStack, Box, Button } from "@chakra-ui/react";

const GameControls: React.FC = () => {
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
    <VStack spacing={4} margin={10}>
      <Box>
        <Button onClick={handleReset} isDisabled={!board.some((col) => col.length)} colorScheme="teal" width={60}>
          Reset
        </Button>
      </Box>
      <Box>
        <Button colorScheme="teal" width={60} onClick={() => {
          handleReset();
          backToSetup();
        }}>
          Back to Setup
        </Button>
      </Box>
    </VStack>
  );
};

export default GameControls;
