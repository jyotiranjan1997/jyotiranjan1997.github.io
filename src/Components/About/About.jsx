import React from "react";
import { Box, Center, Flex, Image, Button, Heading } from "@chakra-ui/react";
import "./About.css";
import muna from "../Images/muna.png";
import Fade from "react-reveal/Fade";
export default function About() {
  return (
    <section className="about">
      <Fade left>
        <div className="heading">
          <Heading> About Me </Heading>
        </div>
        <div className="about-containt">
          <div className="left">
            <img className="profile-image" src={muna} alt="profile-image" />
          </div>

          <div className="right">
            <p id="ps">
              Hello World! I'm Jyotiranjan Mohanty, a Full-Stack Web Developer,
              based out in Masai, Karnataka,Bengaluru. From Mechanical Engg to
              lines of code on a web page, I love combining the worlds of logic
              and creative design to make eye- catching, accessible, and user
              friendly websites and applications.
            </p>

            <p id="ps">
              I love to work on exciting projects that test what I've learnt,
              whilst being exposed to the power and potential of the
              ever-evolving technologies around us. I'm always looking for
              better, and more importantly, ethical and accessible ways to solve
              the common problems we are faced with day-to-day.
            </p>
            <p id="ps">
              I am excited to make the leap and continue refining my skills with
              the right company.
            </p>
            <div className="btn-resume">
              <Button id="btnsss">
                <a href="https://drive.google.com/file/d/1zd1O4TuLSML7sJuPV5DKgMJwUrE-YyK3/view?usp=sharing">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
