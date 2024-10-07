import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import cheese from "../Assets/images/cheese.png";
import leaf1 from "../Assets/images/leaf-1.png";
import leaf2 from "../Assets/images/leaf-2.png";
import chips1 from "../Assets/images/favorite-chips-1.png";
import chips2 from "../Assets/images/favorite-chips-2.png";
import chips3 from "../Assets/images/favorite-chips-3.png";

function Favorites() {
    return (
        <section className="section favorites" id="favorites">
            <div className="favorites-container container grid">
                <div className="favorites-data">
                    <h2 className="favorites-title section-title">
                        DISCOVER YOUR <br />
                        FAVORITE FLAVORS
                    </h2>
                    <p className="favorites-desc">
                        Try some exotic flavors or delicious toppings. We have collected
                        some delicious snack recipes from around the world for you.
                    </p>
                    <img src={cheese} className="favorites-cheese-1 cheese" alt="fav-img" />
                    <img src={cheese} className="favorites-cheese-2 cheese" alt="fav-img" />
                </div>
                <div className="favorites-swiper ">
                    <Swiper
                        slidesPerView='auto'
                        loop={true}
                        grabCursor={true}
                        centeredSlides='auto'
                    >

                        <SwiperSlide className="favorites-article swiper-slide">
                            <img src={chips1} className="favorites-img" alt="fav-img" />
                            <img src={leaf1} className="favorite-leaf-1" alt="fav-img" />
                            <img src={leaf2} className="favorite-leaf-2" alt="fav-img" />
                        </SwiperSlide>
                        <SwiperSlide className="favorites-article swiper-slide">
                            <img src={chips2} className="favorites-img" alt="fav-img" />
                            <img src={leaf1} className="favorite-leaf-1" alt="fav-img" />
                            <img src={leaf2} className="favorite-leaf-2" alt="fav-img" />
                        </SwiperSlide>
                        <SwiperSlide className="favorites-article swiper-slide">
                            <img src={chips3} className="favorites-img" alt="fav-img" />
                            <img src={leaf1} className="favorite-leaf-1" alt="fav-img" />
                            <img src={leaf2} className="favorite-leaf-2" alt="fav-img" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Favorites;