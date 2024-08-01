import React, { useState } from 'react';
import logo from "../../assets/logo_black.webp";
import { PiLineVerticalThin } from "react-icons/pi";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (
        <div className='container'>
            <div className='navbar'>
                <div className='nav-img'>
                    <img className='logo' src={logo} alt=''/>
                </div>
                <button1 className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    <FaBars />
                </button1>
                <ul className={Mobile ? "nav-link-mobile" : "nav-link"} onClick={() => setMobile(false)}>
                    <li><a className='a1' href="/Our Solutions">Our Solutions</a><IoChevronDownSharp className='a-icon'/></li>
                    <li><a className='a1' href="/Resource">Resource</a><IoChevronDownSharp className='a-icon'/></li>
                    <li><a className='a1' href="/Pricing">Pricing</a></li>
                </ul>
                <ul className="desktop-only">
                    <PiLineVerticalThin />
                    <li><a className='a2' href='/Login'>Login</a></li>
                    <PiLineVerticalThin />
                    <li><a className='a2' href='/Book a demo'>Book a demo</a></li>
                    <button className='button'>Free Sign Up</button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
