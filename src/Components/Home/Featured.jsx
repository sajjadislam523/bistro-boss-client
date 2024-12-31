import featuredImg from "../../assets/home/featured.jpg";
import SectionTitle from "../SectionTitle.jsx";
import "./Featured.css";

const Featured = () => {
    return (
        <div className="my-12 text-white featured-items">
            <div className="px-8 py-12 bg-black bg-opacity-50">
                <SectionTitle
                    subHeading={"Check It Out"}
                    heading={"Featured Items"}
                />
                <div className="flex flex-col items-center gap-8 px-16 py-8 md:flex-row">
                    <div>
                        <img src={featuredImg} alt="" />
                    </div>
                    <div>
                        <p className="text-2xl font-inter">
                            March 20, 2023 <br />
                            WHERE CAN I GET SOME?
                        </p>
                        <p>
                            Proactively extend cross-platform bandwidth rather
                            than intuitive meta-services. Completely transition
                            cross-unit e-commerce without interoperable
                            deliverables. Completely conceptualize holistic
                            users rather.
                        </p>
                        <button className="btn btn-outline">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
