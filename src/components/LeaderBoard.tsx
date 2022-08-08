import { FC } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { playerName, gameStats } from "state";

const LeaderBoard: FC = () => {
  const player = useRecoilValue(playerName);
  const stats = useRecoilValue(gameStats)

  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th colSpan={2} textAlign="center">Leaderboard</Th>
            </Tr>
          </Thead>
          <Thead>
            <Tr>
              <Th>Player</Th>
              <Th>Wins</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{player[1]}</Td>
              <Td>{stats[1]}</Td>
            </Tr>
            <Tr>
              <Td>{player[2]}</Td>
              <Td>{stats[2]}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
};

export default LeaderBoard; 
