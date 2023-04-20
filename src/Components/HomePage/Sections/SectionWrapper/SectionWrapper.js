import CustomButton from "../../../CustomButton/CustomButton";
import TitleSection from "../../../TitleSection/TitleSection";

const SectionWrapper = ({ 
    RightPartOfTheSection,
    title,
    heading,
    isShowMore,
    children,
    showCountdown = false
    }) => {
        const showMore = () => {
            if (isShowMore)
                return (
                    <CustomButton
                        content="View All Products" 
                        backgroundColor="#db4444"/>
                );
        }

        return (
            <div>
                <TitleSection 
                    showCountdown={ showCountdown } 
                    title={ title } 
                    heading={ heading } 
                    RightPartOfTheSection={ RightPartOfTheSection }/>
                { children } 
                { showMore() }
            </div>
        );
}

export default SectionWrapper;