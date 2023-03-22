import { Button, Flex } from "@chakra-ui/react";
import React from "react";

const Tags = () => {
  return (
    <Flex
      width="full"
      height="65px"
      align="center"
      gridGap="10px"
      bg="white"
      borderBottom="1px solid"
      borderColor="#e7e7e7"
      overflowX="auto"
      paddingX="10px"
    >
      <Button variant="tagButtonActive">All</Button>
      {[...Array(15)].map((x) => (
        <>
          <Button variant="tagButton">Sport</Button>
          <Button variant="tagButton">Music</Button>
          <Button variant="tagButton">Design</Button>
        </>
      ))}
    </Flex>
  );
};

export default Tags;
