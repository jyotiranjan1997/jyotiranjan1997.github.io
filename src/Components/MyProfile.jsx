import {
  Box,
  Text,
  Flex,
  HStack,
  Heading,
  Image,
  Container,
  Spacer,
  Grid,
  Center,
  Show,
  Hide,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import Typical from "react-typical";
import linkdin from "./Images/linkedin-bounce.gif";
import Github from "./Images/icons8-github.gif";

import { HashLink as Link } from "react-router-hash-link";

export default function MyProfile() {
  return (
    <div>
      <Show breakpoint="(min-width: 900px)">
        <Flex pl="5%" gap="25%" mt="40px">
          <Box>
            <Center>
              <Heading display="flex">
                Hi !
                <Center>
                  <Image
                    src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                    w="50"
                    h={"50px"}
                  ></Image>{" "}
                </Center>
              </Heading>
            </Center>
            <Box>
              <Heading fontSize="3xl">My name is Jyotiranjan Mohanty</Heading>
            </Box>
            <Spacer />
            <Box mt="50px">
              <Heading color="red.300" fontSize="3xl">
                I am a{" "}
                <Typical
                  loop={Infinity}
                  steps={["Full Stack Developer", 1000, "Youtuber", 1000]}
                />
              </Heading>
              <Center mt="20px" ml="30px">
                <Flex gap="20px">
                  <Image src={linkdin} w="10%" borderRadius="30%" />
                  <Image src={Github} w="10%" borderRadius="60%" />{" "}
                </Flex>
              </Center>
            </Box>
          </Box>
          <Box ml="30px">
            <Image
              src="https://camo.githubusercontent.com/c6deab2f711f5000f9f6fc6e38a4f413ed50392c11a2938a351155cb137c6c81/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f36362f38332f33652f36363833336530376436666239656235643732346534376430633831343238352e6769663f7261773d74727565"
              borderRadius="3rem"
              w="60%"
            />
          </Box>
        </Flex>{" "}
      </Show>

      <Hide breakpoint="(min-width: 900px)">
        <Center mt="30px">
          <Box>
            <Center>
              <Heading display="flex">
                Hi !
                <Image
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  w="30"
                  h={"30px"}
                ></Image>
              </Heading>
            </Center>
            <Center>
              <Box>
                <Heading fontSize={{ md: "30px" }}>
                  My name is Jyotiranjan Mohanty
                </Heading>
              </Box>
            </Center>
            <Spacer />
            <Box mt="50px">
              <Center>
                <Heading color="red.300" fontSize={{ md: "30px" }}>
                  I am a{" "}
                </Heading>
                <Heading color="red.300" fontSize={{ md: "30px" }}>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Full Stack Devloper",
                      1000,
                      "MERN Devloper",
                      1000,
                      "Youtuber",
                      1000,
                    ]}
                  />
                </Heading>
              </Center>
              <Center mt="20px" ml="30px">
                <Flex gap="20px">
                  <Image
                    src={linkdin}
                    w="10%"
                    borderRadius="30%"
                  />
                  <Image
                    src={Github}
                    w="10%"
                    borderRadius="60%"
                  />{" "}
                </Flex>
              </Center>
            </Box>
          </Box>
        </Center>
      </Hide>
    </div>
  );
}
