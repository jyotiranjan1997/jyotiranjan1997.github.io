import React from "react";
import "./Github.css";
import GitHubCalendar from "react-github-calendar";
import { Heading, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Github() {
  return (
    <div className="Github">
      <div className="heading">
        <div className="lines">
          <Heading mb="40px">Github Stats</Heading>
        </div>
      </div>
      <div className="Github-prfl" >
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="http://www.github.com/jyotiranjan1997">
            <img
              src="https://github-readme-stats.vercel.app/api?username=jyotiranjan1997&show_icons=true&hide=&count_private=true&title_color=f97316&text_color=ffffff&icon_color=84cc16&bg_color=1c1917&hide_border=true&show_icons=true"
              alt="jyotiranjan1997's GitHub stats"
            />
          </a>
        </div>

        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <a href="http://www.github.com/jyotiranjan1997">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=jyotiranjan1997&stroke=ffffff&background=1c1917&ring=f97316&fire=f97316&currStreakNum=ffffff&currStreakLabel=f97316&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
              alt="hero"
            />
          </a>
        </div>
      </div>
      <div className="git-status" data-aos="zoom-in">
        <Center>
          <Link to="http://www.github.com/jyotiranjan1997">
            <GitHubCalendar
              username="jyotiranjan1997"
              year={new Date().getFullYear()}
              width="100%"
            />
          </Link>
        </Center>
      </div>
    </div>
  );
}
