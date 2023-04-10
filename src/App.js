import CarouselMain from './Components/Carousel/CarouselMain.jsx';
import SearchBarandIcons from './Components';
import CenteredTabs from "./Components/Tabs/index";
import SideBar from './Components/SideBar';
function App() {
  return  <div className="App">
  <CenteredTabs />
   <SearchBarandIcons/>
     <SideBar />
  <CarouselMain />
   </div>
}

export default App;
