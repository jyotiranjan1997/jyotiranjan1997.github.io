import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import "./Project.css";
import urbanCompany from "../Images/urbanCompany.jpg"
import expedia from "../Images/expedia.jpg";
import tmetric from "../Images/Tmetric.jpg";



export default function Projects() {
  return (
    <div className="sub-container">
      <div>
        <Heading> Projects</Heading>
      </div>
      <div className="main-container">
        <div className="project-card">
          <Heading fontSize="25px"> Urban Company Clone </Heading>
          <img src={urbanCompany} alt="urban" />
          <p>
            Urban Company is a service base company where users can book their
            services like Men's saloons, Women's saloons, and home repairing
            accessories.
          </p>
          <div>
            <Button>Github Repo</Button>
            <Button>Deploy Link</Button>
          </div>
        </div>
        <div className="project-card">
          <Heading fontSize="25px"> Tmetric Clone </Heading>
          <img src={tmetric} alt="urban" />
          <p>
            Tmetric Website is a service base of a Time tracking website where
            clients and users can track their teamwork and progress and new
            members and delete.
          </p>
          <div>
            <Button>Github Repo</Button>
            <Button>Deploy Link</Button>
          </div>
        </div>
        <div className="project-card3">
          <Heading fontSize="25px"> Expedia WebPage Clone </Heading>
          <img src={expedia} alt="urban" />
          <p>
           Expedia is Service base website here it gives the flight,bus,train tickets & hotel booking for the users.In this Website I build Landing page,login & signup, product page, payment page,footer.
          </p>
          <div>
            <Button>Github Repo</Button>
            <Button>Deploy Link</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
