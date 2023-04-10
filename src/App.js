import CarouselMain from './components/Carousel/CarouselMain.jsx';
import SearchBarandIcons from './Components';
import CenteredTabs from "./components/Tabs/index";
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
