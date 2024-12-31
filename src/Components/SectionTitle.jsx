import { PropTypes } from "prop-types";
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 mx-auto my-8 text-center">
            <p className="font-inter text-[#D99904] mb-2 italic text-xl">
                --{subHeading}--
            </p>

            <h2 className="py-4 text-4xl uppercase  font-inter border-y-4">
                {heading}
            </h2>
        </div>
    );
};

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default SectionTitle;
