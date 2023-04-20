import { exploreOurProductsData } from "../../../../data/exploreOurProductsData";
import DataView from "../../../../helpers/DataView";
import ArrowButtons from "../../../TitleSection/ArrowButtons/ArrowButtons";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const ExploreOurProducts = () => {
    return (
        <SectionWrapper
            RightPartOfTheSection={ <ArrowButtons/> }
            title="Our Products"
            heading="Explore Our Products"
            isShowMore>
                <DataView
                    dataSource={ exploreOurProductsData }
                    containsMultiColors
                />
        </SectionWrapper>
    );
}

export default ExploreOurProducts;