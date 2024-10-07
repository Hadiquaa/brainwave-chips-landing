import React from "react";
import { FaLeaf } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";

function Banner() {
    return (
        <section className="banner">
            <div className="banner-container">
                <ul className="banner-list">
                    <li className="banner-item">
                        <FaLeaf className="banner-item-icon" />
                        <span>Good for nature</span>
                    </li>
                    <li className="banner-item">
                        <FaHeartPulse className="banner-item-icon" />
                        <span>Low Calories</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Banner;