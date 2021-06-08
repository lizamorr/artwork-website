import {
    NavLink,
    HashRouter
} from "react-router-dom";
import React from "react";

const Menu = () => {
    return (
          <HashRouter>
            <div className="menu">
                <div><NavLink to="/">Home</NavLink></div>
                <div><NavLink to="/gallery">Gallery</NavLink></div>
                <div><NavLink to="/contact">Contact</NavLink></div>
                <div><NavLink to="/about">About</NavLink></div>
            </div>
          </HashRouter>
        )}
export default Menu;