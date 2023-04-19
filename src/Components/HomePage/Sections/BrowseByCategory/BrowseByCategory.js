import Categories from "../../../Categories";
import ArrowButtons from "../../../TitleSection/ArrowButtons/ArrowButtons";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const BrowseByCategory = () => {
    return (
        <SectionWrapper
            RightPartOfTheSection={ <ArrowButtons/> }
            title="Our Products"
            heading="Explore Our Products"
            isShowMore>
                <Categories/>
        </SectionWrapper>
    );
}

export default BrowseByCategory;