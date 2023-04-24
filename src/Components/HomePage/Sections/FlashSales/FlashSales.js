import { flashSalesData } from "../../../../data/flashSalesData";
import DataView from "../../../../helpers/DataView";
import ArrowButtons from "../../../TitleSection/ArrowButtons/ArrowButtons";
import SectionWrapper from "../SectionWrapper/SectionWrapper";

const FlashSales = () => {
  const wrapperStyle = {
    overflowX: "scroll",
    flexWrap: "nowrap",
  };
  return (
    <SectionWrapper
      RightPartOfTheSection={<ArrowButtons />}
      title="Today's"
      heading="Flash Sales"
      showCountdown
      isShowMore
      style={wrapperStyle}
    >
      <DataView dataSource={flashSalesData} containsMultiColors />
    </SectionWrapper>
  );
};

export default FlashSales;
