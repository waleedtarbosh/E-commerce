import CarouselMain from "./Carousel/CarouselMain";
import SideBar from "./SideBar";
import styles from "./HomePage.module.css";
import FlashSales from "./Sections/FlashSales/FlashSales";
import BestSelling from "./Sections/BestSelling/BestSelling";
import ExploreOurProducts from "./Sections/ExploreOurProducts/ExploreOurProducts";
import BrowseByCategory from "./Sections/BrowseByCategory/BrowseByCategory";


const HomePage = () => {
    return (
      <div className={styles.HomePage}>
        <SideBar/>
        <CarouselMain/>
        {/* <FlashSales/>
        <BrowseByCategory/>
        <BestSelling/>
        <ExploreOurProducts/> */}
      </div>
    );
  }

export default HomePage;