

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center text-[#D99904] my-20 text-lg">
            <p >{subHeading}</p>
            <h3 >{heading}</h3>
        </div>
    );
};

export default SectionTitle;