import React from "react";
import background from "../images/background1.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Main() {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={background}
        alt="background-image"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
        <div>
          <h1></h1>
          <h2>
            I am a
            <TypeAnimation
              sequence={[
                "Software developer",
                2000,
                "Front-end Developer",
                2000,
                "Tech Enthusiast",
                2000,
                "Woman in Tech",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div>
            <FaTwitter className="cursor-pointer" size={18} />
            <FaLinkedinIn className="cursor-pointer" size={18} />
            <FaGithub className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
