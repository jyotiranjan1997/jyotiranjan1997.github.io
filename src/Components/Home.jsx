import React from "react";
import "./Home.css";
import MyProfile from "./MyProfile";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Fade from "react-reveal/Fade";
import Skill from "./Skills/Skill";
import Github from "./GithubProfile/Github";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";



export default function Home() {
const[navbar,setNavbar]=React.useState(false)


  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll',changeBackground)



    
    return (
      <div className="Home" id="/">
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
          <div id={navbar ? "Navbar2" : "Navbar"}>
            <Navbar navbar={navbar} />
          </div>
          <Fade up>
            <div>
              <MyProfile />
            </div>
          </Fade>
        </div>
        <div className="About" id="about">
          <About />
        </div>
        <div id="project">
          <Projects />
        </div>

        <div id="skill">
          <Skill />
        </div>
        <div>
          <Github />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      
      </div>
    );
}