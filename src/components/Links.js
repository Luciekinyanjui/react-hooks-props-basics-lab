import React from "react";

function Links(props){
    return(
        <div>
           <a href={props.github}>{props.github}</a>
           <a href={props.linkedin}>{props.linkedin}</a>
        </div>
    )
};