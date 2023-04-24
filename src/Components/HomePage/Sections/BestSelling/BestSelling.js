import { flashSalesData } from "../../../../data/flashSalesData";
import DataView from "../../../../helpers/DataView";
import CustomButton from "../../../CustomButton/CustomButton";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styles from "./BestSelling.module.css";

const BestSelling = () => {
  return (
    <SectionWrapper
      RightPartOfTheSection={
        <CustomButton content="View All" backgroundColor="#db4444" />
      }
      title="This Month"
      heading="Best Selling Products"
      style={styles.wrapper}
    >
      <DataView dataSource={flashSalesData} />
    </SectionWrapper>
  );
};

export default BestSelling;
