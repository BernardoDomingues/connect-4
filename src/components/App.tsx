import React from "react";
import { ChakraProvider, Center,Heading } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { GameProvider } from "providers/game";

import Game from "components/Game";
import ThemeTogglerButton from "components/ThemeTogglerButton";

const App: React.FC = () => (
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
