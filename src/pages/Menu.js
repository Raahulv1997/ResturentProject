import React from 'react'
import Layout from '../components/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {menuList} from '../components/data/data'
const Menu = () => {
  return (
    <Layout>/
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
{menuList.map((menu)=>{
  return(<>
  <Card sx={{maxWidth:"390px", display:"flex",m:2}}>
    <CardActionArea>
      <CardMedia sx={{minHeight:"400px"}} component={"img"} src={menu.image} alt={menu.name}/>

      <CardContent>
        <Typography variant='h5' gutterBottom component={"h5"}>{menu.name}</Typography>
        <Typography variant='body'>{menu.Description}</Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </>)
})}
      </Box>
    </Layout>
  )
}

export default Menu
