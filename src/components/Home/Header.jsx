import React from "react";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justify="space-between" align="center" py={4} px={8}>
      <Flex>
        <Heading size="lg">Hello, I'm ChatGPT</Heading>
        <Text mt={2}>
          I'm a language model trained by OpenAI. I can help you with all kinds
          of questions and tasks!
        </Text>
      </Flex>
      <Image
        src="/your-profile-image.png"
        alt="Your Profile Image"
        boxSize="100px"
        borderRadius="full"
      />
    </Flex>
  );
};

export default Header;
