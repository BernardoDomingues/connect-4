import { useFormik } from 'formik';
import {
  Heading,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack
} from "@chakra-ui/react";
import { useGame } from 'providers/game';
import { PlayersDataInterface } from 'interfaces/game';

interface ColorsProps {
  name: string;
  value: string;
};

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

const colorOptions: ColorsProps[] = [
  {
    name: 'Select a color...',
    value: ''
  },
  {
    name: 'Red',
    value: '#f10000'
  },
  {
    name: 'Yellow',
    value: '#ece100'
  },
  {
    name: 'Green',
    value: '#008000'
  },
  {
    name: 'Blue',
    value: '#0000ff'
  },
  {
    name: 'Orange',
    value: '#ff8c00'
  },
  {
    name: 'Pink',
    value: '#ff1493'
  },
  {
    name: 'Black',
    value: '#000000'
  }
];

const Setup: React.FC<{}> = () => {
  const { capturePlayerData } = useGame();

  const initialValues: PlayersDataInterface = playersDataInitialState;

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      capturePlayerData(values);
    }
  });

  return (
    <Flex align="center" justify="center">
        <form onSubmit={formik.handleSubmit}>
          <Box p={10} rounded="md">
            <VStack spacing={4} align="flex-start">
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
                  {colorOptions.map((color: ColorsProps) => <option value={color.value} key={color.value}>{color.name}</option>)}
                </Select>
              </FormControl>
            </VStack>
          </Box>
          <Box p={10} rounded="md">
            <VStack spacing={4} align="flex-start">
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
                  {colorOptions.map((color: ColorsProps) => <option value={color.value} key={color.value}>{color.name}</option>)}
                </Select>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Start Game
              </Button>
            </VStack>
          </Box>
        </form>
    </Flex>
  );
};

export default Setup;
