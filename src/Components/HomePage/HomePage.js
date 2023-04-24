import styles from "./HomePage.module.css";
import FlashSales from "./Sections/FlashSales/FlashSales";
import BestSelling from "./Sections/BestSelling/BestSelling";
import CategoriesSale from "../CategoriesSale/index";
import ExploreOurProducts from "./Sections/ExploreOurProducts/ExploreOurProducts";
import BrowseByCategory from "./Sections/BrowseByCategory/BrowseByCategory";
import CarouselMain from "./Carousel/CarouselMain";
import SideBar from "./SideBar";
import FeaturedSection from "./Sections/FeaturedSection/FeaturedSection";
import AppServices from "../Services/AppServices";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.mainSection}>
        <SideBar />
        <CarouselMain />
      </div>
      <FlashSales />
      <BrowseByCategory />
      <BestSelling />
      <CategoriesSale />
      <ExploreOurProducts />
      <FeaturedSection />
      <AppServices />
    </div>
  );
};

export default HomePage;
