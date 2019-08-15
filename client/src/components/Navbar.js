import React, { useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [toggleState, setToggleState] = useState(false);

    function toggle() {
        setToggleState(!toggleState);
    }

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
                <div onClick={toggle} className={toggleState ? "dropdown is-right is-active" : "dropdown is-right"}>
                    <div className="dropdown-trigger">
                        <span className="menu-nav-link" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Launches</span>
                        </span>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu" role="menu">
                        <div className="dropdown-content">
                            <a href="/launches" className="dropdown-item">
                                All
                            </a>
                            <a href="/launches/successfull" className="dropdown-item">
                                Succesfull
                            </a>
                            <a href="/launches/falied" className="dropdown-item">
                                Failed
                            </a>
                            <a href="/launches/upcoming" className="dropdown-item">
                                Upcoming
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
