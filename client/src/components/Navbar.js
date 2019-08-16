import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/" className="nav-link" id="brand-logo">
                space<span className="x">x</span>scanner
            </NavLink>
            <div className="menu">
                <NavLink
                    to="/about"
                    className="menu-nav-link"
                >
                    About
                </NavLink>
                <NavLink
                    to="/launches"
                    className="menu-nav-link"
                >
                    Launches
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
