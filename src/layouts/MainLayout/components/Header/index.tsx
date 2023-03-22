import {
  Button,
  IconButton,
  Flex,
  Image,
  Input,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { TiMicrophone } from "react-icons/ti";
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiVideoAddFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";
import useSidebarStore from "@/store/sidebar";

const Header = (props: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const isSidebarClickable = useSidebarStore(
    (state: any) => state.isSidebarClickable
  );

  const isSidebarVisible = useSidebarStore(
    (state: any) => state.isSidebarVisible
  );

  const toggleSidebarVisibility = useSidebarStore(
    (state: any) => state.toggleSidebarVisibility
  );

  return (
    <Flex
      align="center"
      bg="white"
      borderBottom="1px solid"
      borderColor="#e7e7e7"
      width="full"
      height="90px"
      paddingX={{ base: "20px", md: "30px" }}
      position="sticky"
      left="0"
      top="0"
      zIndex="30"
    >
      {props.isSidebarEnabled !== false && (
        <Flex
          display={{ base: "none", md: "unset" }}
          marginRight="25px"
          cursor="pointer"
          onClick={toggleSidebarVisibility}
        >
          <RxHamburgerMenu fontSize="16pt" />
        </Flex>
      )}

      <Flex>
        <Link href="/">
          <Image
            width={{ base: "70px", md: "85px" }}
            minWidth={{ base: "70px", md: "85px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Logo"
          />
        </Link>
      </Flex>

      <Flex
        flexGrow={{ base: "1", md: "unset" }}
        width={{ base: "200px", md: "433px" }}
        marginLeft={{ base: "15px", md: "25px" }}
        marginRight={{ base: "15px" }}
      >
        <InputGroup size="md">
          <Input
            border="2px solid"
            borderColor="#f1f1f1"
            fontSize="11pt"
            rounded="full"
            height="43px"
            pr="4.5rem"
            type="text"
            placeholder="Search a video"
            _hover={{ borderColor: "black" }}
          />
          <InputRightElement width="4.5rem">
            <Button
              fontSize="12pt"
              rounded="full"
              w="44px"
              h="35px"
              size="sm"
              bg="#f1f1f1"
              marginRight="-20px"
              marginTop="3px"
              _hover={{ bg: "black", textColor: "white" }}
            >
              <BiSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Flex
        align="center"
        justify="center"
        minWidth="43px"
        minHeight="43px"
        textColor="white"
        bg="black"
        fontSize="15pt"
        rounded="full"
        cursor="pointer"
        marginRight={{ base: "10px", md: "12.5px" }}
        display={{ base: "none", md: "flex" }}
      >
        <TiMicrophone />
      </Flex>

      <Flex align="center" justify="center" marginLeft="auto">
        <Flex
          as={Button}
          align="center"
          justify="center"
          display={{ base: "none", md: "unset" }}
          width="52px"
          height="52px"
          minWidth="52px"
          minHeight="52px"
          textColor="black"
          bg="#e8e8e8"
          fontSize="16pt"
          fontWeight="800"
          rounded="full"
          cursor="pointer"
          marginRight={{ base: "10px", md: "12.5px" }}
          _hover={{ bg: "black", textColor: "white" }}
        >
          <HiOutlineViewGrid />
        </Flex>

        <Button
          display={{ base: "none", lg: "flex" }}
          minWidth="155px"
          height="55px"
          rounded="full"
          bg="black"
          textColor="white"
          paddingX="30px"
          _hover={{ bg: "black" }}
        >
          <Flex>
            <RiVideoAddFill fontSize="15pt" />
          </Flex>
          <Text fontSize="11pt" marginLeft="10px">
            New Video
          </Text>
        </Button>

        <Flex marginLeft={{ base: "unset", md: "10px" }}>
          {isAuthenticated ? (
            <Image
              width="52px"
              height="52px"
              minWidth="52px"
              minHeight="52px"
              rounded="full"
              objectFit="cover"
              objectPosition="center"
              cursor="pointer"
              src="https://this-person-does-not-exist.com/img/avatar-gen11a2e484e8b2341165678d3397d1d4a8.jpg"
              alt="User Avatar"
            ></Image>
          ) : (
            <Flex
              as={Button}
              align="center"
              justify="center"
              minWidth="60px"
              minHeight="52px"
              textColor="black"
              bg="#f1f1f1"
              border="1px solid"
              borderColor="#e8e8e8"
              fontSize="12pt"
              paddingX="24px"
              rounded="full"
              cursor="pointer"
              _hover={{ bg: "#e8e8e8" }}
            >
              <Flex>
                <FaUserAlt />
              </Flex>
              <Text
                display={{ base: "none", md: "unset" }}
                textAlign="center"
                width="70px"
                fontSize="11pt"
              >
                Sign in
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
