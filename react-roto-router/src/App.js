import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App(){
    return(
        
        <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                
        </Routes>
    
    )
}

export default App