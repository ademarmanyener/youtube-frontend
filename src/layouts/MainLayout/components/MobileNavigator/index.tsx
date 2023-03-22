import React, { useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  AiFillHome,
  AiFillPlaySquare,
  AiFillClockCircle,
} from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { RiVideoAddFill } from "react-icons/ri";
import { Flex, Text, Grid, GridItem } from "@chakra-ui/react";

const MobileNavigatorItem = (props: any) => {
  const router = useRouter();

  return (
    <Flex
      as={NextLink}
      href={props.redirectTo}
      width="20%"
      height="full"
      direction="column"
      align="center"
      justify="end"
      cursor="pointer"
    >
      <Text fontSize="20pt">{props.icon}</Text>
      <Text fontSize="10pt" marginTop="3px">
        {props.title}
      </Text>
      <Flex
        width="70%"
        height="3px"
        roundedTop="3xl"
        bg={`${router.pathname !== props.redirectTo ? "unset" : "red"}`}
        marginTop="10px"
      ></Flex>
    </Flex>
  );
};

const MobileNavigator = () => {
  return (
    <Flex
      width="full"
      height="80px"
      bg="white"
      borderTop="1px solid"
      borderColor="#e7e7e7"
      position="fixed"
      bottom="0"
      left="0"
      zIndex="50"
      display={{ base: "flex", md: "none" }}
      align="center"
      justify="center"
    >
      <MobileNavigatorItem icon={<AiFillHome />} title="Home" redirectTo="/" />
      <MobileNavigatorItem
        icon={<FaCompass />}
        title="Explore"
        redirectTo="/explore"
      />
      <MobileNavigatorItem
        icon={<RiVideoAddFill />}
        title="New video"
        redirectTo="/new"
      />
      <MobileNavigatorItem
        icon={<BsFillCollectionPlayFill />}
        title="Watch later"
        redirectTo="/wl"
      />
      <MobileNavigatorItem
        icon={<HiOutlineViewGrid />}
        title="Menu"
        redirectTo="#"
      />
    </Flex>
  );
};

export default MobileNavigator;
