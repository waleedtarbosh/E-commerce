import React from 'react'
import CenteredTabs from './Tabs'
import SearchBarandIcons from './SearchBarAndIcon'
import TopNav from './TopNav/TopNav'
import Logo from './Logo/Logo'
import header from "./header.module.css"
const Header = () => {
  return (
   <>
   <TopNav/>
   <div className={header.Container}>
     <Logo/>
     <CenteredTabs/>
     <SearchBarandIcons/>
   </div>
   </>
  )
}

export default Header;