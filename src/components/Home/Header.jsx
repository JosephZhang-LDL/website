import React from "react";
import { Flex, Heading, Text, Image, Link } from "@chakra-ui/react";

import profile from "../../assets/profile.jpeg";

const Header = () => {
  return (
    <Flex justify="space-between">
      <Flex flexDir="column">
        <Heading fontWeight="normal" fontSize="5xl">Joseph Zhang</Heading>
        <Text marginTop="5">
          Hi there! I study Computer Science + Economics at Yale and am
          passionate about FinTech, product strategy, consulting, and coding.
          Previously, I’ve been a product manager at{" "}
          <Link href="https://www.foothill.ventures/" isExternal>
            <Text as="span" fontWeight="600">
              Foothill Ventures
            </Text>
          </Link>
          , full-stack developer at{" "}
          <Link href="https://www.opf.degree/" isExternal>
            <Text as="span" fontWeight="600">
              OnePointFive
            </Text>
          </Link>
          , and founder at the social impact start-up The Internship Initiative.
        </Text>
        <Text marginTop="2">
          I’m also interested in hair cutting, badminton, and making music. Feel
          free to shoot me an email at joseph.zhang@yale.edu!
        </Text>
      </Flex>
      <Flex flexDir="column" justifyContent="center" alignItems="end">
        <Image
          borderRadius="50%"
          width="70%"
          objectFit="cover"
          src={profile}
          alt="Profile Picture"
          boxShadow="0px 4px 8px rgba(0, 0, 0, 0.3)"
          transition="box-shadow 0.2s ease-in-out"
          _hover={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.3)" }}
        />
      </Flex>
    </Flex>
  );
};

export default Header;
