import CustomButton from "../../../CustomButton/CustomButton";
import TitleSection from "../../../TitleSection/TitleSection";
import styles from "./style.module.css";

const SectionWrapper = ({
  RightPartOfTheSection,
  title,
  heading,
  isShowMore,
  children,
  showCountdown = false,
}) => {
  const showMore = () => {
    if (isShowMore)
      return (
        <CustomButton content="View All Products" backgroundColor="#db4444" />
      );
  };

  return (
    <div className={styles.wrapper}>
      <TitleSection
        showCountdown={showCountdown}
        title={title}
        heading={heading}
        RightPartOfTheSection={RightPartOfTheSection}
      />
      <div className={styles.product}>{children}</div>
      {showMore()}
    </div>
  );
};

export default SectionWrapper;
