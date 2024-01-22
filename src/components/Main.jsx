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
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1></h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-orange-600">
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
                color: "black",
                fontWeight: "bolder",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-5 max-w-[200px] w-full">
            <FaTwitter
              className="cursor-pointer shadow-lg shadow-gray-500 rounded-full w-10 bg-orange-200"
              size={22}
            />
            <FaLinkedinIn
              className="cursor-pointer shadow-lg shadow-gray-500 m-4 w-10 rounded-full bg-orange-200"
              size={22}
            />
            <FaGithub
              className="cursor-pointer shadow-lg shadow-gray-500 rounded-full w-10 bg-orange-200"
              size={22}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
