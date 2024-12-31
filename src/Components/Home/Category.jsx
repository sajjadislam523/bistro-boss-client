import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../SectionTitle.jsx";

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"From 11:00am to 10:00pm"}
            />
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={4}
                centeredSlides={true}
                pagination={{ clickable: true }}
                className="mb-24 mySwiper"
            >
                <SwiperSlide className="mx-auto">
                    <img className="w-auto" src={slide1} alt="slide1" />
                    <h3 className="-mt-16 text-4xl text-center text-white uppercase font-cinzel">
                        Salads
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide2" />
                    <h3 className="-mt-16 text-4xl text-center text-white uppercase font-cinzel">
                        Pizzas
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide3" />
                    <h3 className="-mt-16 text-4xl text-center text-white uppercase font-cinzel">
                        Soups
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide4" />
                    <h3 className="-mt-16 text-4xl text-center text-white uppercase font-cinzel">
                        Desserts
                    </h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide5" />
                    <h3 className="-mt-16 text-4xl text-center text-white uppercase font-cinzel">
                        Salads
                    </h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
