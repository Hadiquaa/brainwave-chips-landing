import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter, FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <header className="header">
            <nav className="nav container">
                <a href="#" className="nav-logo">CHIPS</a>
                <div className="nav-menu">
                    <ul className="nav-list">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#favorites" className="nav-link">Favorites</a></li>
                        <li><a href="#care" className="nav-link">Care</a></li>
                        <li><a href="#products" className="nav-link">Products</a></li>
                        <li><a href="#contacts" className="nav-link">Contacts</a></li>
                    </ul>
                    {/* close button */}
                    <div className="nav-close">
                        <IoMdClose />
                    </div>
                    {/* nav-socials */}
                    <div className="nav-socials">
                        <a href="#" target="_blank" class="nav-social-link"><FaFacebook /></a>
                        <a href="#" target="_blank" class="nav-social-link"><FaInstagram /></a>
                        <a href="#" target="_blank" class="nav-social-link"><FaTwitter /></a>
                    </div>
                </div>
                <div className="nav-toggle"><FaBars /></div>
            </nav>
        </header>
    );
}

export default Navbar;