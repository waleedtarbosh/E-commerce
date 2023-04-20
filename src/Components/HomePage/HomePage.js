import styles from "./HomePage.module.css";
import FlashSales from "./Sections/FlashSales/FlashSales";
import BestSelling from "./Sections/BestSelling/BestSelling";
import ExploreOurProducts from "./Sections/ExploreOurProducts/ExploreOurProducts";
import BrowseByCategory from "./Sections/BrowseByCategory/BrowseByCategory";
import CarouselMain from "./Carousel/CarouselMain";
import SideBar from "./SideBar";
import { Box } from '@mui/material';
const HomePage = () => {
    return (
      <div>
        <Box sx={{ display: 'flex', justifyContent: { md: 'space-between' }, alignItems: 'center' ,marginTop: {md :'0px',sm:'0px', xs: '150px' }}}>
      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, marginLeft: { md: '120px'} }}>
        <SideBar />
      </Box>
      
      <CarouselMain />
    </Box>
    <div className={styles.HomePage}>
        {/* <FlashSales/>
        <BrowseByCategory/>
        <BestSelling/>
        <ExploreOurProducts/> */}
      </div>
      </div>
      
    );
  }

export default HomePage;
