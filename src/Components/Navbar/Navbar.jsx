import {
  Box,
  Flex,
  Spacer,
  Show,
  Center,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link } from "react-scroll";
import SideNav from "./SideNav";
import Resume from "../Images/Jyotiranjan.pdf";
import "./Navbar.css";

export default function Navbar({ navbar }) {
  return (
    <Flex
      w="full"
      alignItems="center"
      gap="2"
      p={5}
      pl="40px"
      pr="40px"
      justifyContent="space-between"
      bg="transparent"
    >
      <Box>
        <Link
          to="/"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          activeClassName="selected"
        >
          <Flex>
            <Heading _hover={{ cursor: "pointer" }} fontSize={{ sm: "40px" }}>
              Protfo
            </Heading>
            <Heading
              fontSize={{ sm: "40px" }}
              color={navbar ? "white" : "teal.300"}
            >
              lio{" "}
            </Heading>
          </Flex>
        </Link>
      </Box>
      <Spacer />
      <Show breakpoint="(min-width: 1000px)">
        <Flex gap="5">
          <Center>
            <Link
              to="/"
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              activeClassName="selected"
            >
              <Text _hover={{ cursor: "pointer" }} fontSize="1.5xl">
                Home{" "}
              </Text>
            </Link>
          </Center>
          <Center>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClassName="selected"
            >
              <Text _hover={{ cursor: "pointer" }} fontSize="1.5xl">
                About{" "}
              </Text>
            </Link>
          </Center>
          <Center>
            <Link
              to="project"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClassName="selected"
            >
              <Text _hover={{ cursor: "pointer" }} fontSize="1.5xl">
                Projects{" "}
              </Text>
            </Link>
          </Center>
          <Center>
            <Link
              to="skill"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClassName="selected"
            >
              <Text _hover={{ cursor: "pointer" }} fontSize="1.5xl">
                Skills{" "}
              </Text>
            </Link>
          </Center>
          <Center>
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              activeClassName="selected"
            >
              <Text _hover={{ cursor: "pointer" }} fontSize="1.5xl">
                Contacts{" "}
              </Text>
            </Link>
          </Center>

          <Center>
            <Button bgColor="teal" colorScheme="green">
              <a href={Resume} download={true}>
                Resume
              </a>
            </Button>
          </Center>
        </Flex>
      </Show>
      <Show breakpoint="(max-width: 999px)">
        <div className="sidebar">
          <SideNav />
        </div>
      </Show>
    </Flex>
  );
}
