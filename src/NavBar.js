import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <NavLink className="Navdistance" to="/home">Home</NavLink>
            <NavLink className="Navdistance" to="/about">About</NavLink>
        </>
    )
}
export default Nav;