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
import { Box } from '@mui/material';
const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <div className={styles.mainSection}>
      <Box sx={{ display: 'flex', justifyContent: { md: 'space-between' }, alignItems: 'center' ,marginTop: {md :'0px',sm:'0px', xs: '0px' } }}>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'block' } }}>
        <SideBar />
      </Box>
      <Box sx={{width:{md:'100%',xs:'15%',sm:'50%'}, marginRight: {md :'0px',sm:'0px', xs: '0px' }}}>
      <CarouselMain />
      </Box>
    </Box>
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
