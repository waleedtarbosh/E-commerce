import React, { useState } from 'react'
import CenteredTabs from './Tabs'
import SearchBarandIcons from './SearchBarAndIcon'
import TopNav from './TopNav/TopNav'
import Logo from './Logo/Logo'
import header from "./header.module.css"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/material'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => setShowMenu(showMenu => !showMenu);

  return (
    <>
      <TopNav />
      <div className={header.Container}>
      <Box sx={{ fontSize: { xs: '10px', md:'24px',sm:'9px'}}}>
          <Logo />
        </Box>
        <Box sx={{ display: { xs: 'none' ,md: 'block',sm:'block'} ,marginLeft:{md:'50px', sm:'0px'},marginRight:'0px', marginTop:'10px',fontSize: { xs: '8px', md:'16px'}}}>
        <CenteredTabs />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block' , sm: 'block' }, fontSize: { xs: '8px', md:'16px'}, marginTop: '10px',marginRight:'350px'}}>
          <SearchBarandIcons />
        </Box>
        <Box sx={{ marginRight:{xs:'1100px'},display: { md: 'none' ,sm:'none',} }}>
        <IconButton onClick={handleToggleMenu}  >
          <MenuIcon />
        </IconButton>
        </Box>
        {showMenu && (
          <Box
            sx={{
              position: 'absolute',
              top: '120px',
              right: '0',
              background: '#fff',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
              borderRadius: '4px',
              zIndex: '2',
              padding: '0px',
            }}
          >
        <Box sx={{ display: {  md: 'block' ,sm:'block'}, fontSize: { xs: '8px', md:'16px',sm: '10px'}, marginTop: '10px' ,marginLeft:{xs:'-15px'}}}>
          <SearchBarandIcons />
        </Box>
            <CenteredTabs />
          </Box>
        )}
      </div>
    </>
  )
}

export default Header;