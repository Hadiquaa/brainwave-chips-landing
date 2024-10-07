import React from "react";
import homeMeat from "../Assets/images/meat.png";
import homeChips from "../Assets/images/home-chips.png";
import chips1 from "../Assets/images/chips-1.png"
import chips2 from "../Assets/images/chips-2.png";
import chips3 from "../Assets/images/chips-3.png";
import tomato1 from "../Assets/images/tomato-1.png";
import tomato2 from "../Assets/images/tomato-2.png";
import leaf3 from "../Assets/images/leaf-3.png";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-data">
                    <h1 className="home-title">
                        SNACK <br />
                        WITH NO <br />
                        LIMITS
                    </h1>
                    <p className="home-desc">
                        When you are hungry and dont have time to cook, snacks are the
                        perfect solution, always prepare for midday hunger.
                    </p>
                    <img src={homeMeat} className="home-meat"></img>
                    <div className="button-container">
                        <button className="button">Snack Now</button>
                        <button className="button button-ghost">Buy Now</button>
                    </div>
                </div>
                <div className="home-images">
                    <div className="home-circle">
                        <div className="home-subcircle"></div>
                    </div>
                    <img
                        src={homeChips}
                        alt="image"
                        className="home-img"
                        id="home-img"
                    />
                    <img
                        src={chips1}
                        alt="image"
                        className="home-chips-1"
                    />
                    <img
                        src={chips2}
                        alt="image"
                        className="home-chips-2"
                    />
                    <img
                        src={chips3}
                        alt="image"
                        className="home-chips-3"
                    />
                    <img
                        src={tomato1}
                        alt="image"
                        className="home-tomato-1"
                    />
                    <img
                        src={tomato2}
                        alt="image"
                        className="home-tomato-2"
                    />
                    <img src={leaf3} alt="image" classNameName="home-leaf" />

                </div>
            </div>
        </section>
    );
}

export default Home;