import { flashSalesData } from "../../../../data/flashSalesData";
import DataView from "../../../../helpers/DataView";
import ArrowButtons from "../../../TitleSection/ArrowButtons/ArrowButtons";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./style.module.css";

const FlashSales = () => {
  return (
    <SectionWrapper
      RightPartOfTheSection={<ArrowButtons />}
      title="Today's"
      heading="Flash Sales"
      showCountdown
      isShowMore
      style={styles.wrapper}
    >
      <DataView dataSource={flashSalesData} containsMultiColors />
    </SectionWrapper>
  );
};

export default FlashSales;
