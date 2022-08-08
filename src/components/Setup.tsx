import React, { useState } from "react";
import { avaliableColors } from "const";
import { useGame } from "providers/game";
import { PlayersDataInterface } from "interfaces";
import { useFormik } from "formik";
import {
  Heading,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Alert,
  AlertIcon,
  Grid,
  Center,
} from "@chakra-ui/react";

const playersDataInitialState = {
  playerOneData: {
    name: '',
    color: '',
  },
  playerTwoData: {
    name: '',
    color: '',
  }
};

const RenderSelectOptions: React.FC<{}> = () => <>
  {avaliableColors.map((color) => <option value={color.value} key={color.value}>{color.name}</option>)}
</>;

const Setup: React.FC<{}> = () => {
  const { capturePlayerData } = useGame();

  const [thereError, setThereError] = useState<string | null>(null);

  const initialValues: PlayersDataInterface = playersDataInitialState;

  const validateForm = (values: PlayersDataInterface) => {
    if(values.playerOneData.name === '' || values.playerTwoData.name === '') {
      return 'Input Player´s name';
    } else if (values.playerOneData.color === '' || values.playerTwoData.color === '') {
      return 'Input Player´s color';
    } else if (values.playerOneData.name.toLocaleLowerCase() === values.playerTwoData.name.toLocaleLowerCase()) {
      return 'Player names must be different';
    } else if (values.playerOneData.color === values.playerTwoData.color) {
      return 'Player colors must be different';
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const findedErros = validateForm(values);
      findedErros ? setThereError(findedErros) : capturePlayerData(values);
    }
  });

  return (
    <Flex justify="center">
        <form onSubmit={formik.handleSubmit}>
          {thereError &&
            <Center margin={4}>
              <Alert status='warning'>
                <AlertIcon />
                  {thereError}
              </Alert>
            </Center>
          }
          <Grid gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
            <Box p={8} rounded="md" borderWidth={1} borderRadius={8} boxShadow="lg" m="10px">
              <VStack spacing={4}>
                <Heading>Player One</Heading>
                <FormControl>
                  <FormLabel htmlFor="playerOneData.name">Name</FormLabel>
                  <Input
                    id="playerOneData.name"
                    name="playerOneData.name"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.playerOneData.name}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="playerOneData.color">Color</FormLabel>
                  <Select
                    id="playerOneData.color"
                    name="playerOneData.color"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.playerOneData.color}
                  >
                    <RenderSelectOptions />
                  </Select>
                </FormControl>
              </VStack>
            </Box>
            <Box p={8} rounded="md" borderWidth={1} borderRadius={8} boxShadow="lg" m="10px">
              <VStack spacing={4}>
                <Heading>Player Two</Heading>
                <FormControl>
                  <FormLabel htmlFor="playerTwoData.name">Name</FormLabel>
                  <Input
                    id="playerTwoData.name"
                    name="playerTwoData.name"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.playerTwoData.name}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="playerTwoData.color">Color</FormLabel>
                  <Select
                    id="playerTwoData.color"
                    name="playerTwoData.color"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.playerTwoData.color}
                  >
                    <RenderSelectOptions />
                  </Select>
                </FormControl>
              </VStack>
            </Box>
          </Grid>
          <Center margin={4}>
            <Button  type="submit" colorScheme="teal" width={60}>
              Start Game
            </Button>
          </Center>
        </form>
    </Flex>
  );
};

export default Setup;
