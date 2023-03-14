import {
  Box,
  Flex,
  Heading,
  Image,
  Center,
  Show,
  Hide,
  Button,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";

import linkdin from "./Images/linkedin-bounce.gif";
import Github from "./Images/icons8-github.gif";
import Twitter from "./Images/twitter.jpg";
import { Link as Hashlink } from "react-scroll";
import muna2 from "./Images/muna2.png";
import Typewriter from "typewriter-effect";

export default function MyProfile() {
  return (
    <div>
      <Show breakpoint="(min-width: 900px)">
        <Flex pl="5%" gap="20%" mt="40px">
          <Box>
            <Center>
              <Heading display="flex">
                Hi !
                <Center>
                  <Image
                    src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                    w="50"
                    h={"50px"}
                  ></Image>
                </Center>
              </Heading>
            </Center>
            <Box>
              <Center>
                <Heading fontSize="3xl">My name is Jyotiranjan Mohanty</Heading>
              </Center>
            </Box>
            <Spacer />
            <Box mt="50px">
              <Heading color="teal.300" fontSize="2xl">
                <Center color="white">I am a </Center>
                <Center>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      strings: [
                        "Full Stack Devloper",
                        "MERN Devloper",
                        "Youtuber",
                        "Problem Solver",
                      ],
                    }}
                  />
                </Center>
              </Heading>
            </Box>
            <Center mt="20px" ml="30px">
              <Center gap="15px">
                <Link
                  w="7%"
                  href="https://www.linkedin.com/in/jyoti-ranjan-mohanty-81a240193/"
                  isExternal="true"
                >
                  <Image src={linkdin} borderRadius="30%" />
                </Link>
                <Link
                  w="7%"
                  href="https://github.com/jyotiranjan1997/"
                  isExternal="true"
                >
                  <Image src={Github} borderRadius="60%" />
                </Link>
                <Link
                  w="7%"
                  href="https://twitter.com/JYOTIRA38754604"
                  isExternal="true"
                >
                  <Image src={Twitter} borderRadius="60%" />
                </Link>{" "}
              </Center>
            </Center>
            <Box mt="25px">
              <Center>
                <Flex gap="10%">
                  <Button bgColor="teal" colorScheme="green">
                    <Hashlink
                      to="contact"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                      activeClassName="selected"
                    >
                      Contact
                    </Hashlink>
                  </Button>
                  <Button bgColor="teal" colorScheme="green">
                    <Hashlink
                      to="project"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                      activeClassName="selected"
                    >
                      Projects
                    </Hashlink>{" "}
                  </Button>
                </Flex>
              </Center>
            </Box>
          </Box>
          <Box right="2%">
            <Image
              id="my-prfl"
              src={muna2}
              w="80%"
              borderRadius="60%"
              bgColor="teal"
            />
          </Box>
        </Flex>
      </Show>

      <Hide breakpoint="(min-width: 900px)">
        <Center mt="30px">
          <Box>
            <Center>
              <Heading
                display="flex"
                fontSize={["20px", "30px", "30px", "40px"]}
              >
                Hi !
                <Image
                  src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                  w="20px"
                  h={"20px"}
                ></Image>
              </Heading>
            </Center>
            <Center>
              <Box>
                <Heading fontSize={["17px", "30px", "30px", "40px"]}>
                  My name is Jyotiranjan Mohanty
                </Heading>
              </Box>
            </Center>
            <Spacer />
            <Box mt="50px">
              <Center>
                <Heading mr="5px" fontSize={{ sm: "30px", md: "35px" }}>
                  I am a{" "}
                </Heading>
                <Heading color="teal.300" fontSize={{ sm: "30px", md: "35px" }}>
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 60,
                      strings: [
                        "Full Stack Devloper",
                        "MERN Devloper",
                        "Youtuber",
                        "Problem Solver",
                      ],
                    }}
                  />
                </Heading>
              </Center>
            </Box>
          </Box>
        </Center>
        <Center mt="20px" ml="30px">
          <Center display="flex" gap="18px">
            <Link
              w="7%"
              href="https://www.linkedin.com/in/jyoti-ranjan-mohanty-81a240193/"
              isExternal="true"
            >
              <Image src={linkdin} borderRadius="30%" />
            </Link>
            <Link
              w="7%"
              href="https://github.com/jyotiranjan1997/"
              isExternal="true"
            >
              <Image src={Github} borderRadius="60%" />
            </Link>
            <Link
              w="7%"
              href="https://twitter.com/JYOTIRA38754604"
              isExternal="true"
            >
              <Image src={Twitter} borderRadius="60%" />
            </Link>
          </Center>
        </Center>
        <Box mt="25px">
          <Center>
            <Flex gap="10%">
              <Button bgColor="teal" colorScheme="green">
                <Hashlink
                  to="contact"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  activeClassName="selected"
                >
                  Contact
                </Hashlink>
              </Button>
              <Button bgColor="teal" colorScheme="green">
                <Hashlink
                  to="project"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  activeClassName="selected"
                >
                  Projects
                </Hashlink>
              </Button>
            </Flex>
          </Center>
        </Box>
      </Hide>
    </div>
  );
}
