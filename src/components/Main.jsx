import React from "react";
import background from "../images/background1.jpg";

export default function Main() {
    return (
        <div id="main">
           <img className="w-full h-screen object-cover object-left" src={background} alt="background-image" />
           <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
           <div>
             <h1>I'm Mamello Mokoena</h1>
             <h2>Software developer</h2>
           </div>
           </div>
        </div>
    )
}