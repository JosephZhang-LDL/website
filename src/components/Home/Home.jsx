import React from "react";
import { Text, Flex, Box } from "@chakra-ui/react";

// Personal Components
import Header from "./Header";

const Home = () => {
  return (
    <Flex
      paddingX="20vw"
      paddingTop="15vh"
      paddingBottom="8vh"
      flexDir="column"
      height="100vh"
    >
      <Flex flex="1" flexDir="column">
        <Header />
      </Flex>
      <Flex flexShrink="0">
        <Text>Made with React</Text>
      </Flex>
    </Flex>
  );
};

export default Home;
