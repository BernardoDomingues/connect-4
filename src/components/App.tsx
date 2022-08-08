import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import { GameProvider } from "providers/game";
import { FC } from "react";
import { RecoilRoot } from "recoil";
import Game from "components/Game";
import ThemeTogglerButton from "./ThemeTogglerButton";

const App: FC = () => (
  <ChakraProvider>
    <RecoilRoot>
      <GameProvider>
        <Container py={4} as={VStack}>
          <ThemeTogglerButton />
          <Game />
        </Container>
      </GameProvider>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
