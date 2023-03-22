import React from "react";
import NextLink from "next/link";
import MainLayout from "@/layouts/MainLayout";
import { Image, Text, Flex, Button } from "@chakra-ui/react";

const Explore = () => {
  return (
    <MainLayout>
      <Flex
        direction="column"
        align="center"
        width="100%"
        paddingX="25px"
        paddingY="75px"
        userSelect="none"
      >
        <Image
          width="200px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="Logo"
          marginBottom="40px"
        />
        <Text fontWeight="600" fontSize="50pt" textAlign="center">
          Explore
        </Text>
        <Text fontWeight="600" fontSize="26pt" textAlign="center">
          {`There isn't much to explore here.`}
        </Text>
        <Button
          as={NextLink}
          href="/"
          variant="tagButtonActive"
          marginTop="35px"
          paddingX="35px"
          paddingY="25px"
        >
          Return home
        </Button>
      </Flex>
    </MainLayout>
  );
};

export default Explore;
