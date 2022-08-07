import { boardRows } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState, gameStats as gameStatsInitialState } from "state";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);
  const [gameStats, setGameStats] = useRecoilState(gameStatsInitialState);

  const updateStats = () => {
    console.log(player);
    const newGameStats = gameStats;
    if (player === 1) {
      setGameStats({1: newGameStats[1] + 1, 2: newGameStats[2] })
    } else {
      setGameStats({1: newGameStats[1], 2: newGameStats[2] + 1 })
    }
  };

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) // Did win horizontally
      // TODO: Did win diagonally
    ) {
      updateStats();
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
