import {
  Button,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import { ImHome, ImAddressBook, ImFilePdf } from "react-icons/im";
import { MdAccountBox, MdWork } from "react-icons/md";
import Resume from "../Images/Jyotiranjan.pdf";



export default function SideNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon w={6} h={6} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="black" color="white" zIndex="150">
          <DrawerCloseButton />

          <Center mt="40%">
            <DrawerBody>
              <Center>
                <Link
                  to="/"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  activeClassName="selected"
                >
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 35px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        <Icon as={ImHome} color="teal" />
                      </Center>
                      <Center>
                        <Text _hover={{ cursor: "pointer" }} fontSize="25px">
                          {" "}
                          Home
                        </Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="20px">
            <DrawerBody>
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
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 35px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        <Icon as={MdAccountBox} color="teal" />
                      </Center>
                      <Center>
                        <Text _hover={{ cursor: "pointer" }} fontSize="25px">
                          {" "}
                          About
                        </Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="20px">
            <DrawerBody>
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
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 25px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        <Icon as={MdWork} color="teal" />
                      </Center>
                      <Center>
                        <Text _hover={{ cursor: "pointer" }} fontSize="25px">
                          {" "}
                          Projects
                        </Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </Link>
              </Center>
            </DrawerBody>
          </Center>
          <Center mt="20px">
            <DrawerBody>
              <Center>
                <Link
                  activeClass="active"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  activeClassName="selected"
                >
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 35px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        <Icon as={MdAccountBox} color="teal" />
                      </Center>
                      <Center>
                        <Text _hover={{ cursor: "pointer" }} fontSize="25px">
                          {" "}
                          Skills
                        </Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="20px">
            <DrawerBody>
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
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 25px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        {" "}
                        <Icon as={ImAddressBook} color="teal" />
                      </Center>
                      <Center>
                        {" "}
                        <Text _hover={{ cursor: "pointer" }} fontSize="25px">
                          {" "}
                          Contact
                        </Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="20px">
            <DrawerBody>
              <Center>
                <a href={Resume} download={true}>
                  <Button
                    ref={btnRef}
                    onClick={onClose}
                    p="25px 25px"
                    bgColor="black"
                    colorScheme="teal"
                  >
                    <Flex gap="25px" p="10px">
                      <Center>
                        {" "}
                        <Icon as={ImFilePdf} color="teal" />
                      </Center>
                      <Center>
                        {" "}
                        <Text fontSize="25px"> Resume</Text>{" "}
                      </Center>
                    </Flex>
                  </Button>
                </a>
              </Center>
            </DrawerBody>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
}
