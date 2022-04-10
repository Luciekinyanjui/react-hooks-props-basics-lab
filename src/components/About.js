import React from "react";
import Links from "./Links";

function About() 
  function About(props){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p>: null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <h3>Links</h3>
      <links github= {props. links.github}/>
      <links github= {props. links.linkedin}/>
    </div>
  );
}

export default About;
