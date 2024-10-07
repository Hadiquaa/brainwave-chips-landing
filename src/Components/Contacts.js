import React from "react";
import { FaEnvelope, FaFacebookMessenger } from "react-icons/fa6";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import contactMan from "../Assets/images/contact-man.png";
import shrimp from "../Assets/images/shrimp.png";
import crab from "../Assets/images/crab.png";
import meat from "../Assets/images/meat.png";

function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="contact-container container">
                <h2 className="section-title">
                    CONTACT US TO <br />
                    EAT CHIPS
                </h2>
                <div className="contact-content grid">
                    <div className="contact-data grid">
                        <div>
                            <h3 className="contact-title">Write to us</h3>
                            <div className="contact-social">
                                <a href="#" target="_blank">
                                    <FaEnvelope />
                                </a>
                                <a href="#" target="_blank">
                                    <FaWhatsapp />
                                </a>
                                <a href="www.faceook.com" target="_blank">
                                    <FaFacebookMessenger />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="contact-title">Call Us</h3>
                            <div className="contact-phone contact-info">
                                <FaPhone />
                                <a href="tel:+123456789">+123456789</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="contact-title">Find Us Here</h3>
                            <address className="contact-address contact-info">
                                Lim-Sun City- Peru <br />
                                Av Moon #4321
                            </address>
                        </div>
                    </div>
                    <img
                        src={contactMan}
                        alt=""
                        className="contact-img"
                    />
                </div>
                <img src={shrimp} alt="" className="contact-shrimp" />
                <img src={crab} alt="" className="contact-crab" />
                <img src={meat} alt="" className="contact-meat" />
            </div>
        </section>
    )
}

export default Contacts;