import { ChakraProvider, Center,Heading } from "@chakra-ui/react";
import { GameProvider } from "providers/game";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import Game from "components/Game";
import ThemeTogglerButton from "./ThemeTogglerButton";

const App: FC = () => (
  <ChakraProvider>
    <RecoilRoot>
      <GameProvider>
        <>
          <ThemeTogglerButton />
          <Center>
            <Heading margin={4}>Connect 4</Heading>
          </Center>
          <Game />
        </>
      </GameProvider>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
