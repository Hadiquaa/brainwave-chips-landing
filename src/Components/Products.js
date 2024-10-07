import React from "react";
import chips3 from "../Assets/images/favorite-chips-3.png";
import { FaCartShopping } from "react-icons/fa6";
import chips1 from "../Assets/images/favorite-chips-1.png";
import chips2 from "../Assets/images/favorite-chips-2.png";
import chips4 from "../Assets/images/product-chips-4.png";
import chips5 from "../Assets/images/product-chips-5.png";
import crab from "../Assets/images/crab.png";
import hamburger from "../Assets/images/hamburger (1).png";
import cheese from "../Assets/images/cheese.png";

function Products() {
    return (
        <section className="products" id="products">
            <h2 className="section-title">
                BEST SELLING <br />
                PRODUCT
            </h2>
            <div className="products-container container">
                <div className="products-content grid">
                    <article className="products-card">
                        <img
                            src={chips3}
                            className="products-img"
                        />
                        <span className="products-subtitle">Crab</span>
                        <h2 className="products-title">Chips</h2>
                        <p className="products-price">$4</p>
                        <button className="products-button">
                            <FaCartShopping />
                        </button>
                    </article>
                    <article className="products-card">
                        <img
                            src={chips1}
                            className="products-img"
                        />
                        <span className="products-subtitle">Cheese</span>
                        <h2 className="products-title">Chips</h2>
                        <p className="products-price">$5</p>
                        <button className="products-button">
                            <FaCartShopping />
                        </button>
                    </article>
                    <article className="products-card">
                        <img
                            src={chips2}
                            className="products-img"
                        />
                        <span className="products-subtitle">BBQ</span>
                        <h2 className="products-title">Chips</h2>
                        <p className="products-price">$6</p>
                        <button className="products-button">
                            <FaCartShopping />
                        </button>
                    </article>
                    <article className="products-card">
                        <img
                            src={chips4}
                            className="products-img"
                        />
                        <span className="products-subtitle">Hot</span>
                        <h2 className="products-title">Chips</h2>
                        <p className="products-price">$7</p>
                        <button className="products-button">
                            <FaCartShopping />
                        </button>
                    </article>
                    <article className="products-card">
                        <img
                            src={chips5}
                            className="products-img"
                        />
                        <span className="products-subtitle">Mix</span>
                        <h2 className="products-title">Chips</h2>
                        <p className="products-price">$8</p>
                        <button className="products-button">
                            <FaCartShopping />
                        </button>
                    </article>
                </div>
                <img src={crab} alt="image" className="products-crab" />
                <img
                    src={hamburger}
                    alt="image"
                    className="products-hamburger"
                />
                <img
                    src={cheese}
                    alt="image"
                    className="products-cheese"
                />
            </div>
        </section>
    )
}

export default Products;