import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Tags from "./components/Tags";
import StoryIcons from "./components/StoryIcons";
import MobileNavigator from "./components/MobileNavigator";
import useSidebarStore from "@/store/sidebar";

const MainLayout = (props: any) => {
  const isSidebarClickable = useSidebarStore(
    (state: any) => state.isSidebarClickable
  );

  const isSidebarVisible = useSidebarStore(
    (state: any) => state.isSidebarVisible
  );

  return (
    <React.Fragment>
      <Header isSidebarEnabled={props.isSidebarEnabled} />
      <Flex direction="row">
        {props.isSidebarEnabled !== false && isSidebarVisible && <Sidebar />}
        <Flex
          direction="column"
          bg="#f1f1f1"
          width="full"
          paddingLeft={{
            base: "none",
            md: `${
              props.isSidebarEnabled !== false && isSidebarVisible
                ? "175px"
                : "0px"
            }`,
          }}
          marginBottom={{ base: "80px", md: "unset" }}
          minHeight="full"
          zIndex="10"
        >
          {props.showTags !== false && <Tags />}
          {props.showStoryIcons !== false && <StoryIcons />}
          <Flex direction="column">{props.children}</Flex>
        </Flex>
      </Flex>
      <MobileNavigator />
    </React.Fragment>
  );
};

export default MainLayout;
