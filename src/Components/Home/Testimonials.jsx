import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../SectionTitle.jsx";

// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("https://bistrobossserver-three.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);
    return (
        <section>
            <SectionTitle
                subHeading={"What Our Client Say"}
                heading={"Testimonials"}
            />
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center gap-4 mx-24 my-16">
                            <Rating
                                value={review.rating}
                                style={{ maxWidth: 120 }}
                                readOnly
                            />
                            <p className="text-center">{review.details}</p>
                            <h3 className="text-3xl text-[#CD9003]">
                                {review.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
