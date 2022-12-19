import { Box, Button, Center, Heading, Show, Text } from "@chakra-ui/react";
import React from "react";
import "./Project.css";
import urbanCompany from "../Images/urbanCompany.jpg";
import expedia from "../Images/expedia.jpg";
import tmetric from "../Images/Tmetric.jpg";
import movie from "../Images/movieApp.jpg";
import "swiper/css";
import "swiper/css/pagination";
import Project1 from "./Project1";

export default function Project() {
  return (
    <div className="sub-container">
      <div>
        <div className="heading">
          <div className="lines">
            <Heading>Projects</Heading>
          </div>
        </div>
      </div>
      <Show breakpoint="(min-width: 300px)">
        <div className="main-container">
          <Project1/>
        </div>
        <div className="main-container">
          
          <div className="project-card" data-aos="flip-left">
            <Heading fontSize="24px" mb="25px">
              Urban Company Clone{" "}
            </Heading>
            <img src={urbanCompany} alt="urban" />
            <p>
              Urban Company is a service base company where users can book their
              services like Men's saloons, Women's saloons, and home repairing
              accessories.
            </p>

            <Center p="2%">
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                </Center>
                <Text fontSize="15px">JavaScript</Text>
              </Box>
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />
                </Center>
                <Text fontSize="15px">HTML</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Text fontSize="15px">CSS</Text>
              </Box>
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    width="26"
                    height="26"
                    alt="React"
                  />
                </Center>
                <Text fontSize="15px">React</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="data:image/jpeg;base64,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"
                    width="18"
                    height="18"
                    alt="Filebase"
                  />
                </Center>
                <Text fontSize="15px">Chakra UI</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                    width="26"
                    height="26"
                    alt="Firebase"
                  />
                </Center>
                <Text fontSize="15px">Firebase</Text>
              </Box>
            </Center>
            <Center className="repo-btn">
              <a
                href="https://github.com/jyotiranjan1997/-dull-letter-5131"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Github Repo
                </Button>
              </a>
              <a
                href="https://dull-letter-5131-7cab4.web.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Deploy Link
                </Button>
              </a>
            </Center>
          </div>
          <div className="project-card" data-aos="flip-right">
            <Heading fontSize="24px" mb="25px">
              Tmetric Clone
            </Heading>
            <img src={tmetric} alt="urban" />
            <p>
              Tmetric Website is a service base of a Time tracking website where
              clients and users can track their teamwork and progress and new
              members and delete.
            </p>
            <Center p="2%">
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                </Center>
                <Text fontSize="15px">JavaScript</Text>
              </Box>
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />
                </Center>
                <Text fontSize="15px">HTML</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Text fontSize="15px">CSS</Text>
              </Box>
            </Center>
            <Center className="repo-btn">
              <a
                href="https://github.com/jyotiranjan1997/noisy-mailbox-2939"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Github Repo
                </Button>
              </a>
              <a
                href="https://wonderful-jelly-d74aac.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Deploy Link
                </Button>
              </a>
            </Center>
          </div>
        </div>
        <div className="main-container">
          <div className="project-card3" data-aos="flip-left">
            <Heading fontSize="24px" mb="25px">
              Expedia WebPage Clone
            </Heading>
            <img src={expedia} alt="urban" />
            <p>
              Expedia is Service base website here it gives the flight,bus,train
              tickets & hotel booking for the users.In this Website I build
              Landing page,login & signup, product page, payment page,footer.
            </p>

            <Center p="2%">
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                </Center>
                <Text fontSize="15px">JavaScript</Text>
              </Box>
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />
                </Center>
                <Text fontSize="15px">HTML</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Text fontSize="15px">CSS</Text>
              </Box>
            </Center>
            <Center className="repo-btn">
              <a
                href="https://github.com/jyotiranjan1997/grieving-driving-625"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Github Repo
                </Button>
              </a>
              <a
                href="https://boisterous-stardust-ed4703.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Deploy Link
                </Button>
              </a>
            </Center>
          </div>
          <div className="project-card3" data-aos="flip-right">
            <Heading fontSize="24px" mb="25px">
              Mini Movie App
            </Heading>
            <img src={movie} alt="urban" />
            <p>
              It is a Mini movie app I made, and it help you to search the movie
              according to search. Also, It will gives the movie detalis as
              well. According to the filter user can find details as well.
            </p>

            <Center p="2%">
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                </Center>
                <Text fontSize="15px">JavaScript</Text>
              </Box>
              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />
                </Center>
                <Text fontSize="15px">HTML</Text>
              </Box>

              <Box p="1%">
                <Center>
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Text fontSize="15px">CSS</Text>
              </Box>
            </Center>
            <Center className="repo-btn">
              <a
                href="https://github.com/jyotiranjan1997/Mini-Movie-app"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Github Repo
                </Button>
              </a>
              <a
                href="https://delightful-hotteok-fd5d14.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button bgColor="teal" colorScheme="green">
                  Deploy Link
                </Button>
              </a>
            </Center>
          </div>
        </div>
      </Show>
      {/* <Show breakpoint="(max-width: 100px)">
        <Box mt="15px">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="project-card" data-aos="flip-left">
                <Heading fontSize="25px" mb="30px">
                  Urban Company Clone{" "}
                </Heading>
                <img src={urbanCompany} alt="urban" />
                <p>
                  Urban Company is a service base company where users can book
                  their services like Men's saloons, Women's saloons, and home
                  repairing accessories.
                </p>

                <Center p="2%">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                    width="26"
                    height="26"
                    alt="React"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />

                  <img
                    src="data:image/jpeg;base64,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"
                    width="16"
                    height="16"
                    alt="Filebase"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                    width="26"
                    height="26"
                    alt="Firebase"
                  />
                </Center>
                <Center className="repo-btn">
                  <a href="https://github.com/jyotiranjan1997/-dull-letter-5131">
                    <Button bgColor="teal" colorScheme="green">
                      Github Repo
                    </Button>
                  </a>
                  <a href="https://urbancomapny.netlify.app/">
                    <Button bgColor="teal" colorScheme="green">
                      Deploy Link
                    </Button>
                  </a>
                </Center>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-card" data-aos="flip-down">
                <Heading fontSize="25px" mb="20px">
                  Tmetric Clone
                </Heading>
                <img src={tmetric} alt="urban" />
                <p>
                  Tmetric Website is a service base of a Time tracking website
                  where clients and users can track their teamwork and progress
                  and new members and delete.
                </p>
                <Center p="2%">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />

                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Center className="repo-btn">
                  <a href="https://github.com/jyotiranjan1997/noisy-mailbox-2939">
                    <Button bgColor="teal" colorScheme="green">
                      Github Repo
                    </Button>
                  </a>
                  <a href="https://wonderful-jelly-d74aac.netlify.app/">
                    <Button bgColor="teal" colorScheme="green">
                      Deploy Link
                    </Button>
                  </a>
                </Center>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-card3" data-aos="flip-right">
                <Heading fontSize="25px" mb="20px">
                  Expedia WebPage Clone
                </Heading>
                <img src={expedia} alt="urban" />
                <p>
                  Expedia is Service base website here it gives the
                  flight,bus,train tickets & hotel booking for the users.In this
                  Website I build Landing page,login & signup, product page,
                  payment page,footer.
                </p>

                <Center p="2%">
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                    width="26"
                    height="26"
                    alt="JavaScript"
                  />
                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                    width="26"
                    height="26"
                    alt="HTML5"
                  />

                  <img
                    src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                    width="26"
                    height="26"
                    alt="CSS3"
                  />
                </Center>
                <Center className="repo-btn">
                  <a href="https://github.com/jyotiranjan1997/grieving-driving-625">
                    <Button bgColor="teal" colorScheme="green">
                      Github Repo
                    </Button>
                  </a>
                  <a href="https://boisterous-stardust-ed4703.netlify.app/">
                    <Button bgColor="teal" colorScheme="green">
                      Deploy Link
                    </Button>
                  </a>
                </Center>
              </div>
            </SwiperSlide>
          </Swiper>
        </Box> */}
      {/* </Show> */}
    </div>
  );
}
