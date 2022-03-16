import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Services from "./Services"

function App() {
    return (
        <div>
            <h1 className="toot">Toot N Shoot Plumbing</h1>
            <nav className="navBar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />

            </Routes>
        </div>

    )
}

export default App