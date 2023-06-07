import { Box, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Footer = () => {
  return (
 <>
 <Box  sx={{textAlign:"center", bgcolor:"black" , color:"white", p:3}}>
  <Box sx={{my:3,"& svg":{fontSize:"60px", cursor:"pointer", mr:2},"& svg:hover":{color:"goldenrod",transform:"translateY(10px)", transition:"all 400ms"}}}>
<InstagramIcon/>
<LinkedInIcon/>
<FacebookIcon/>
<WhatsAppIcon/>
  </Box>
    <Typography variant='h5' sx={{"@media(max-width:600px)":{fontSize:"1rem"}}}>All Rights Reserved &copy; Rahul verma</Typography>
 </Box>
 </>
  )
}

export default Footer
