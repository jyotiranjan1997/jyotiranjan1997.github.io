import {
  Input,
  Box,
  Heading,
  Text,
  useToast,
  Center,
  Flex,
  Icon,
  Link,
  
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Textarea } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import "./Contact.css";
import { useState } from "react";


let intialState = {
  name: "",
  email: "",
  text: "",
  subject: "",
};

export default function Contact() {
  let [data, setData] = useState(intialState);
  const form = useRef();

  const toast = useToast();

  const handleClick = (Item) => {
    toast({
      title: "Email sending",
      description: `We've ${Item} send email.`,
      status: Item,
      duration: 6000,
      isClosable: true,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (data.name === "" || data.text === "" || data.email === "") {
      emailjs
        .sendForm(
          "service_23c6ocq",
          "template_22vwbsh",
          form.current,
          "e3zA7f2JOHKMX-cS"
        )
        .then(
          (result) => {
            let Item = "error";
            handleClick(Item);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            let Item = "error";
            handleClick(Item);
          }
        );
      setData(intialState);
    } else {
      emailjs
        .sendForm(
          "service_23c6ocq",
          "template_22vwbsh",
          form.current,
          "ie3zA7f2JOHKMX-cS"
        )
        .then(
          (result) => {
            let Item = "success";
            handleClick(Item);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
            let Item = "error";
            handleClick(Item);
          }
        );

      setData(intialState);
    }
  };
  console.log(data);
  useEffect(() => {}, [data]);
  return (
    <div className="contact">
      <div className="heading">
        <div className="lines">
          <Heading>Contact</Heading>
        </div>
      </div>
      <div className="Container-contact">
        <div className="getin-touch">
          <div>
            <Text fontSize="30px" mb="7%" color="teal">
              Get in touch
            </Text>
            <Flex mb="15px" gap="10px">
              <Center>
                <Icon as={EmailIcon} color="teal" />
              </Center>

              <Center>
                <Text>mohanty.ryzen@gmail.com </Text>
              </Center>
            </Flex>
            <Flex mb="15px" gap="10px">
              <Center>
                <Icon as={PhoneIcon} color="teal" />
              </Center>
              <Center>
                <Text>+91 06371660063</Text>
              </Center>
            </Flex>

            <Flex mb="15px" gap="10px">
              <Link href="https://github.com/jyotiranjan1997" isExternal>
                <FaGithub size="25px" />
              </Link>

              <Link
                href="https://www.linkedin.com/in/jyoti-ranjan-mohanty-81a240193/"
                isExternal="true"
              >
                <FaLinkedin size="25px" />
              </Link>
              <Link
                href="https://twitter.com/JYOTIRA38754604"
                isExternal="true"
              >
                <FaTwitterSquare size="25px" />
              </Link>
            </Flex>

            <div></div>
          </div>
        </div>

        <div className="form-control">
          <form ref={form} onSubmit={sendEmail}>
            <Input
              type="text"
              name="user_name"
              placeholder="Your name"
              mb="15px"
              value={data.name}
              focusBorderColor="teal.400"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
            <Input
              type="email"
              name="user_email"
              placeholder="Email"
              mb="15px"
              focusBorderColor="teal.400"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <Box mb="15px">
              <Input
                placeholder="Subject"
                focusBorderColor="teal.400"
                value={data.subject}
                onChange={(e) => setData({ ...data, subject: e.target.value })}
              />
            </Box>
            <Box>
              <Textarea
                fontSize={["18px", "18px", "20px", "20px"]}
                focusBorderColor="teal.400"
                name="message"
                placeholder="Here is write your message"
                size="md"
                resize={"none"}
                value={data.text}
                onChange={(e) => setData({ ...data, text: e.target.value })}
              />
            </Box>
            <Center w="30%" mt="15px">
              <Input
                bgColor="teal"
                type="submit"
                value="Send"
                placeholder="Submit"
                color="white"
                cursor="pointer"
              />
            </Center>
          </form>
        </div>
      </div>
    </div>
  );
}
