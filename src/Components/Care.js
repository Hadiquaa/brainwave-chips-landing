import React from "react";
import { FaSeedling, FaHandHoldingHeart } from "react-icons/fa";
import { FaFireFlameCurved, FaHeartPulse } from "react-icons/fa6";
import careChips from "../Assets/images/care-chips.png";

function Care() {
    return (
        <section className="care section" id="care">
            <h2 className="section-title">
                ENJOY AND TAKE <br />
                CARE OF YOUR HEALTH
            </h2>
            <div className="care-container container grid">
                <ul className="care-list">
                    <li className="care-item">
                        <FaSeedling className="care-item-img" />
                        <p>
                            The potatoes that are made into snacks are grown and harvested
                            and are 100% organic
                        </p>
                    </li>
                    <li className="care-item">
                        <FaFireFlameCurved className="care-item-img" />
                        <p>
                            We fry the fries with vegetable and natural oil for good care.
                        </p>
                    </li>
                    <li className="care-item">
                        <FaHeartPulse className="care-item-img" />
                        <p>
                            The potatoes are not processed, once cooked they are cooked
                            without preservatives.
                        </p>
                    </li>
                    <li className="care-item">
                        <FaHandHoldingHeart className="care-item-img" />
                        <p>
                            They contain fewer calories and lesser fats for good health.
                        </p>
                    </li>
                </ul>
                <img src={careChips} className="care-img" />
            </div>
        </section>
    )
}

export default Care;