import { flashSalesData } from "../../../data/flashSalesData";
import DataView from "../../../helpers/DataView";
import SectionWrapper from "../../HomePage/Sections/SectionWrapper/SectionWrapper";
import styles from "../../HomePage/Sections/SectionWrapper/style.module.css";
import style from "../../HomePage/Sections/BestSelling/BestSelling.module.css";

const Related = () => {
  return (
    <SectionWrapper
      title="Related Item"
      style={`${styles.wrapper} ${style.wrapper}`}
      sx={{ width: "1170px", margin: "140px auto" }}
    >
      <DataView dataSource={flashSalesData} />
    </SectionWrapper>
  );
};

export default Related;
