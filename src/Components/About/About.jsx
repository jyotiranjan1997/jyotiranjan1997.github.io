import React from "react";
import { Box, Center, Flex, Image,Container} from "@chakra-ui/react";
import "./About.css"
export default function About() {
    return (
      <section class="about" id="about">
        <div class="content">
          <div class="title">
            <span>About Me</span>
          </div>
          <div class="about-details">
            <div class="left">
              <img
                src="https://i.ibb.co/T4MfRsq/prfl2-removebg-Copy.png"
                alt=""
              />
            </div>
            <div class="right">
              <div class="topic" id="title">
                <span class="title-word title-word-1">CODING</span>
                <span class="title-word title-word-2">IS</span>
                <span class="title-word title-word-3">MY</span>
                <span class="title-word title-word-4">PASSION</span>
              </div>
              <p id="ps">
                Hello World! I'm Nachiket Lele, a Full-Stack Web Developer,
                based out in Sirsi, Karnataka. From Mechanical Engg to lines of
                code on a web page, I love combining the worlds of logic and
                creative design to make eye- catching, accessible, and user
                friendly websites and applications.
              </p>

              <p id="ps">
                I love to work on exciting projects that test what I've learnt,
                whilst being exposed to the power and potential of the
                ever-evolving technologies around us. I'm always looking for
                better, and more importantly, ethical and accessible ways to
                solve the common problems we are faced with day-to-day.
              </p>
              <p id="ps">
                I am excited to make the leap and continue refining my skills
                with the right company.
              </p>
              <div class="button">
                <button id="btnsss">
                  <a href="https://drive.google.com/file/d/1hDfRcpyMYom3j5R24_zaYWQO3pbUZlK0/view?usp=sharing">
                    Download CV{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
