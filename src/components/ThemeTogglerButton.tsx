import { FC } from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ThemeTogglerButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button borderRadius="20px" onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
};

export default ThemeTogglerButton;
