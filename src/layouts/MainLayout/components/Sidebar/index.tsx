import { Flex, Button, Text, Link } from "@chakra-ui/react";
import {
  AiFillHome,
  AiFillPlaySquare,
  AiFillClockCircle,
} from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { MdSubtitles } from "react-icons/md";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";

const SidebarMenuItem = (props: any) => {
  const router = useRouter();

  return (
    <Flex
      as={NextLink}
      href={props.redirectTo}
      direction="row"
      align="center"
      width="full"
      height="60px"
      cursor="pointer"
      bg="unset"
      _hover={{ bg: "#efefef" }}
      _active={{ bg: "#e7e7e7" }}
    >
      <Flex
        width="3px"
        height="70%"
        roundedRight="3xl"
        bg={`${router.pathname !== props.redirectTo ? "unset" : "red"}`}
        marginRight="20px"
      ></Flex>
      <Text fontSize="17pt">{props.icon}</Text>
      <Text fontSize="10pt" marginLeft="15px" fontWeight="500" bg="unset">
        {props.title}
      </Text>
    </Flex>
  );
};

const Sidebar = () => (
  <Flex
    display={{ base: "none", md: "unset" }}
    width="175px"
    height="full"
    bg="white"
    borderRight="1px solid"
    borderColor="#e7e7e7"
    position="fixed"
    top="0"
    left="0"
    paddingTop="90px"
    zIndex="20"
    overflowY="auto"
  >
    <SidebarMenuItem icon={<AiFillHome />} title="Home" redirectTo="/" />
    <SidebarMenuItem
      icon={<FaCompass />}
      title="Explore"
      redirectTo="/explore"
    />
    <SidebarMenuItem
      icon={<AiFillPlaySquare />}
      title="Subscriptions"
      redirectTo="/subscriptions"
    />
    <SidebarMenuItem
      icon={<MdSubtitles />}
      title="Library"
      redirectTo="/library"
    />
    <SidebarMenuItem
      icon={<AiFillClockCircle />}
      title="History"
      redirectTo="/history"
    />
    <SidebarMenuItem
      icon={<BsFillCollectionPlayFill />}
      title="Watch later"
      redirectTo="/wl"
    />
    <Flex direction="column" marginLeft="20pt" marginTop="30px" rowGap="20px">
      <Text textColor="#b0b0b2" fontSize="9pt">
        More from YouTube
      </Text>
      <Link textColor="#37363c" fontSize="9pt">
        Gaming
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Live
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Fashion and Beauty
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Learning
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Sports
      </Link>
    </Flex>
    <Flex direction="column" marginLeft="20pt" marginTop="30px" rowGap="20px">
      <Text textColor="#b0b0b2" fontSize="9pt">
        YouTube
      </Text>
      <Link textColor="#37363c" fontSize="9pt">
        About
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Copyright
      </Link>
      <Link textColor="#37363c" fontSize="9pt">
        Contact Us
      </Link>
    </Flex>
    <Text marginLeft="20px" marginTop="50px" textColor="#5b5a60" fontSize="8pt">
      YouTube Frontend @2023
    </Text>
    <Text
      marginLeft="20px"
      marginBottom="20px"
      textColor="#939395"
      fontSize="7pt"
    >
      Adem Arman Yener
    </Text>
  </Flex>
);

export default Sidebar;
