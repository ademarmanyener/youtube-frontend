import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import NextLink from "next/link";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  AspectRatio,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import videosList from "@/dummydata/videosList.json";

const Homepage = () => {
  const [videos, setVideos] = useState<any>({});
  const [loadVideoCount, setLoadVideoCount] = useState<number>(4);

  useEffect(() => {
    setVideos(videosList);
    console.log(videosList.items[0]);
  }, []);

  return (
    <MainLayout>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        width="100%"
        rowGap={{ base: "15px", md: "25px" }}
        columnGap={{ base: "10px", md: "15px" }}
        padding={{ base: "10px", md: "22px" }}
      >
        {[...Array(loadVideoCount)].map((x) => (
          <>
            {videos?.items?.map((video: any) => (
              <>
                <AspectRatio width="100%" ratio={16 / 9}>
                  <GridItem
                    as={NextLink}
                    href={`/watch/${video.video_description.id}`}
                    rounded="2xl"
                    w="100%"
                    h="100%"
                    cursor="pointer"
                  >
                    <Image
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      objectPosition="center"
                      src={video.video_description.thumbnail_url}
                      alt="Video Thumbnail"
                    />
                    <Flex
                      as={NextLink}
                      href={`/channel/${video.video_description.uploader.channel_id}`}
                      position="absolute"
                      align="center"
                      justify="flex-start"
                      left={{ base: "5px", md: "10px" }}
                      top={{ base: "5px", md: "10px" }}
                      borderRadius="full"
                      paddingLeft="5px"
                      paddingY={{ base: "5px", md: "unset" }}
                      paddingRight={{ base: "5px", md: "15px" }}
                      columnGap="5px"
                      maxWidth="60%"
                      height={{ base: "unset", md: "25px" }}
                      lineHeight="25px"
                      bg="white"
                      display={{ base: "flex", md: "flex" }}
                      boxShadow="sm"
                    >
                      <Image
                        width="20px"
                        height="20px"
                        rounded="full"
                        cursor="pointer"
                        alt="User Avatar"
                        src="https://this-person-does-not-exist.com/img/avatar-gen119f2c661ea1e358cc5b595dbae0fc80.jpg"
                      ></Image>
                      <Text
                        display={{ base: "none", md: "block" }}
                        fontSize="9pt"
                        fontWeight="500"
                        isTruncated={true}
                        noOfLines={1}
                      >
                        {video.video_description.title}
                      </Text>
                    </Flex>
                    <Flex
                      position="absolute"
                      right={{ base: "5px", md: "10px" }}
                      top={{ base: "5px", md: "10px" }}
                      borderRadius="full"
                      paddingX="10px"
                      paddingY="5px"
                      maxWidth="40%"
                      minHeight="15px"
                      lineHeight="15px"
                      bg="rgba(255,255,255,0.4)"
                      textColor="white"
                      fontWeight="600"
                      fontSize="8pt"
                      textShadow="0px 0px 11px rgba(0, 0, 0, 0.3);"
                      boxShadow="sm"
                    >
                      14:53
                    </Flex>
                    <Flex
                      position="absolute"
                      bottom="0"
                      left="0"
                      align="center"
                      width="100%"
                      height="40px"
                      backdropFilter="auto"
                      backdropBlur="lg"
                    >
                      <Text
                        width="100%"
                        height={{ base: "15pt", md: "40px" }}
                        lineHeight={{ base: "15pt", md: "40px" }}
                        textColor="white"
                        fontSize={{ base: "10pt", md: "11pt" }}
                        fontWeight="500"
                        textShadow="0px 0px 11px rgba(0, 0, 0, 0.3);"
                        paddingLeft="15px"
                        marginRight="15px"
                        isTruncated
                        noOfLines={1}
                      >
                        {video.video_description.title}
                      </Text>
                    </Flex>
                  </GridItem>
                </AspectRatio>
              </>
            ))}
          </>
        ))}
      </Grid>
      <Button
        variant="tagButton"
        margin="10px"
        paddingY="15px"
        borderColor="#e7e7e7"
        _hover={{ textColor: "black", bg: "#e7e7e7", borderColor: "#d9d9d9" }}
        onClick={() => setLoadVideoCount(loadVideoCount + 4)}
      >
        Load more videos
      </Button>
    </MainLayout>
  );
};

export default Homepage;
