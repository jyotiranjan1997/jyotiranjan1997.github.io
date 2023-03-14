import React from "react";
import { Button, Heading, Image } from "@chakra-ui/react";
import "./About.css";
import muna from "../Images/muna.png";
import Resume from "../Images/Jyotiranjan.pdf";

export default function About() {
  return (
    <section className="about" data-aos="fade-right">
      <div className="heading">
        <div className="lines">
          <div className="diamond"></div>
          <Heading> About Me </Heading>
        </div>
      </div>
      <div className="about-containt">
        <div className="left">
          <Image className="profile-image" src={muna} alt="profile-images" />
        </div>

        <div className="right">
          <p id="ps">
            My name's Jyotiranjan Mohanty. I'm a full stack web developer based
            in Odisha, India.
          </p>
          <br />
          {/* As a developer, I want to contribute my skills to a company by developing
          software that meets the needs of the company. I want to helped in many ways, such as developing websites, apps, and software. I have also contributed in group projects terms of fixing bugs, coding, and testing. */}
          <p id="ps">
            I am a B.tch Mechanical graduate and love exploring new technologies
            in the field of Web Development and always try to adapt to them. I
            believe in the concept of continuous learning by regularly upgrading
            my skills and enhancing my knowledge. I have learned MERN stack,
            data structures, algorithms, and soft skills at Masai School. As a
            developer, I want to contribute my skills to a company by developing
            software that meets the needs of the company. I want to help in many
            ways, such as developing websites, apps, and software. I have also
            contributed to group projects in terms of fixing bugs, coding, and
            testing.
          </p>
          <div className="btn-resume">
            <Button id="btnsss" bgColor="teal" colorScheme="green">
              <a href={Resume} download={true}>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
