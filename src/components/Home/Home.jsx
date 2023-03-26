import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Heading fontWeight="bold">Hello, I'm ChatGPT</Heading>
      <Text>
        I'm a language model trained by OpenAI. I can help you with all kinds of
        questions and tasks!
      </Text>
    </div>
  );
};

export default Home;