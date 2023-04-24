import Categories from "../../../Categories";
import ArrowButtons from "../../../TitleSection/ArrowButtons/ArrowButtons";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const BrowseByCategory = () => {
  return (
    <SectionWrapper
      RightPartOfTheSection={<ArrowButtons />}
      title="Categories"
      heading="Browse By Category"
    >
      <Categories />
    </SectionWrapper>
  );
};

export default BrowseByCategory;
