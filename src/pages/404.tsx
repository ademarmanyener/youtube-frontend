import React, { useEffect } from "react";
import NextLink from "next/link";
import MainLayout from "@/layouts/MainLayout";
import { Text, Button, Flex } from "@chakra-ui/react";

const Error404 = () => {
  return (
    <MainLayout
      isSidebarEnabled={false}
      showTags={false}
      showStoryIcons={false}
    >
      <Flex
        direction="column"
        align="center"
        width="100%"
        paddingX="25px"
        paddingY="75px"
        userSelect="none"
      >
        <Text fontWeight="600" fontSize="90pt" textAlign="center">
          404
        </Text>
        <Text fontWeight="600" fontSize="26pt" textAlign="center">
          This page does not exist.
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

export default Error404;
