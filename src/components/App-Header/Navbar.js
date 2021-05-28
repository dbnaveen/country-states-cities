import React from 'react';
import "./Navbar.scss"
import logo from "../../Images/world.svg"

function Navbar() {
    return (
        <>
            <div className="navbar-container">
                <img src={logo} alt="Logo" />
                Country States Cities
            </div>
        </>
    )
}

export default Navbar
