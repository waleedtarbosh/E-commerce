import React from 'react'
import CenteredTabs from '../Header/Tabs'
import SearchBarandIcons from '../Header/SearchBarAndIcon'
import SideBar from '../Header/SideBar'
import CarouselMain from '../Header/Carousel/CarouselMain'

const header = () => {
  return (
   <>
   <CenteredTabs></CenteredTabs>
   <SearchBarandIcons></SearchBarandIcons>
     <SideBar></SideBar>
 <CarouselMain></CarouselMain>
   </>
  )
}

export default header;