import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const StoryIcons = () => {
  return (
    <Flex
      width="full"
      height="70px"
      align="center"
      paddingX="10px"
      columnGap={{ base: "10px", md: "20px" }}
      bg="white"
      borderBottom="1px solid"
      borderColor="#e7e7e7"
      overflowX="auto"
    >
      {[...Array(10)].map((x, y) => (
        <>
          {[
            "https://this-person-does-not-exist.com/img/avatar-gen1129e6fe06ea1fcdef64dae7e2e3896a.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen11178be98f2b2c21b16328dba21251b1.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen116c646c20b30bd78c05fc990a070d79.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen2972ac9d0a14afea5ee8d5d00bb0938b.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen111d3e7cd5fbe0213c2fbe0129b33618.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen0515ec3fd897035dc05ed4d8d5a45ee7.jpg",
            "https://this-person-does-not-exist.com/img/avatar-gen119f2c661ea1e358cc5b595dbae0fc80.jpg",
          ].map((x, y) => (
            <Flex key={y}>
              <Image
                width="42px"
                height="42px"
                minWidth="42px"
                minHeight="42px"
                rounded="full"
                cursor="pointer"
                alt="User Avatar"
                src={x}
              ></Image>
            </Flex>
          ))}
        </>
      ))}
    </Flex>
  );
};

export default StoryIcons;
