import {
  Button,
  Drawer,
  Container,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { HashLink as Link } from "react-router-hash-link";

export default function SideNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon w={8} h={8} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <Center mt="40px">
            <DrawerBody>
              <Center>
                <Link>
                  <Heading> Home</Heading>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="40px">
            <DrawerBody>
              <Center>
                <Link>
                  <Text> About</Text>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="40px">
            <DrawerBody>
              <Center>
                <Link>
                  <Text> Projects</Text>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="40px">
            <DrawerBody>
              <Center>
                <Link>
                  <Text> Contacts</Text>
                </Link>
              </Center>
            </DrawerBody>
          </Center>

          <Center mt="40px">
            <DrawerBody>
              <Center>
                <Link>
                  <Text> Resume</Text>
                </Link>
              </Center>
            </DrawerBody>
          </Center>
        </DrawerContent>
      </Drawer>
    </>
  );
}
