import React from "react"
import { Link } from "react-router-dom"

function About(){
    return(
        <div>
           <h1>About</h1> 
           <nav>
               <Link to="/">About</Link>
           </nav>
        </div>
    )
}

export default About