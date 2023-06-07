import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';
export const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)

  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer=(
    <Box onClick={handleDrawerToggle} sx={{textAlign:"center"}}>
    <Typography color={"goldenrod"} variant='h6' component={'div'} sx={{flexGrow:1,my:2}} >  <FastfoodIcon/> MY Resturentf</Typography> 
    <Divider/>
        
      <ul className='mobile-navigation'>
        <li>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
         
        </li>
        </ul>
     
    </Box>
  )
  return (
    <>
    <Box>
      <AppBar component={ 'nav'} sx={{bgcolor:"black"}}>
      <Toolbar> 
        <IconButton color='inherit' aria-level="open drawer" edge="start" sx={{mr:2, display:{sm:"none"}}} onClick={handleDrawerToggle}> 
          <MenuIcon/>
        </IconButton>
       
        <Typography color={"goldenrod"} variant='h6' component={'div'} sx={{flexGrow:1}} >  <FastfoodIcon/> MY Resturentf</Typography> 
      
      <Box sx={{display:{xs:"none",sm:"block "}}}>
        
      <ul className='navigation-menu'>
        <li>
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/contact"}>Contact</Link>
         
        </li>
        </ul>
      </Box>
      
        </Toolbar> 
      </AppBar>
      <Box component={"nav"} >
        <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:"block", sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:"220px"}}}>
          {drawer}
        </Drawer>
      </Box>
      <Box>
      <Toolbar/>
      </Box>
      
    </Box>
      </>
  )
}
