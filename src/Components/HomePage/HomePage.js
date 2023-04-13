import CarouselMain from "./Carousel/CarouselMain";
import SideBar from "./SideBar";
import styles from "./HomePage.module.css";
const HomePage = () => {
    return (
    
   
     <div className={styles.HomePage}>
      <SideBar/>
      <CarouselMain/>
     </div>
     
     
    )
  }
  
  export default HomePage;