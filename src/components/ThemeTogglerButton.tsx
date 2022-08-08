import { FC } from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeTogglerButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box position="absolute">
      <Button borderRadius="20px" margin={5} onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </Button>
    </Box>
  )
};

export default ThemeTogglerButton;
