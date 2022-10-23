import React from "react";
import "./Home.css";
import MyProfile from "./MyProfile";
import Navbar from "./Navbar/Navbar";
import { Show,Image,Box,Flex, Center } from "@chakra-ui/react";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Fade from "react-reveal/Fade";
import Skill from "./Skills/Skill";
import Github from "./GithubProfile/Github";
export default function Home() {
    
    return (
      <div className="Home">
        <Fade down>
          <div className="Body">
            <img
              className="BackgroundImg"
              src="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"
              alt="bacground"
            />
          </div>
        </Fade>
        <div className="subBody">
          <div id="Navbar">
            <Navbar />
          </div>
          <Fade up>
            <MyProfile />
            {/* <Show breakpoint="(min-width: 900px)">
              <svg
                className="wave"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="white"
                  fill-opacity="2"
                  d="M0,192L80,208C160,224,320,256,480,234.7C640,213,800,139,960,128C1120,117,1280,171,1360,197.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                ></path>{" "}
              </svg>
            </Show> */}
          </Fade>
        </div>
        <div className="About">
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Skill />
        </div>
        <div>
          <Github />
        </div>
      </div>
    );
}