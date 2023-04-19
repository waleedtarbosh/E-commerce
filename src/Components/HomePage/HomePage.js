import CarouselMain from "./Carousel/CarouselMain";
import SideBar from "./SideBar";
import { Box } from '@mui/material';


const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: { md: 'space-between' }, alignItems: 'center' ,marginTop: {md :'0px',sm:'0px', xs: '150px' }}}>
      <Box sx={{ display: { xs: 'none', sm: 'block', md: 'block' }, marginLeft: { md: '120px'} }}>
        <SideBar />
      </Box>
      
      <CarouselMain />
    </Box>
  )
}

export default HomePage;
