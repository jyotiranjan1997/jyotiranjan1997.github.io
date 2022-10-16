import {
  Box,
  Grid,
  Flex,
  Image,
  Button,
  Spacer,
  Show,
  Hide,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Center,
  Heading,
  Text
} from "@chakra-ui/react";

import React, { useContext } from "react";
import { HashLink as Link } from "react-router-hash-link";
import SideNav from "./SideNav";

export default function Navbar() {
  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      justifyContent="space-between"
      bg="transperent"
    >
      <Box>
        <Link to="/">
          <Heading>Protfolio </Heading>
        </Link>
      </Box>
      <Spacer />
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
          <Center>
            <Link>
              <Text fontSize="1.5xl">Home </Text>
            </Link>
          </Center>
          <Center>
            <Link>
              <Text fontSize="1.5xl">About </Text>
            </Link>
          </Center>
          <Center>
            <Link>
              <Text fontSize="1.5xl">Projects </Text>
            </Link>
          </Center>
          <Center>
            <Link>
              <Text fontSize="1.5xl">Contacts </Text>
            </Link>
          </Center>

          <Link>
            <Center>
              <Text fontSize="1.5xl">Resume </Text>
            </Center>
          </Link>
        </Flex>
      </Show>
      <Hide above="1000px">
        <SideNav />
      </Hide>
      <Box></Box>
    </Flex>
  );
}
