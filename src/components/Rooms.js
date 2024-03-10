import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import one from './potato.png';
import s from './brinjal.png';
import s1 from './vegi1.png';
import rake from './tomato.png';
import rake1 from './bitter.png';
import rake2 from './vegi2.png';
import { Link } from "react-router-dom";
import { BorderAllOutlined } from '@mui/icons-material';
import Navbar from './Navbar';
export default function Mobile() {
   const Mobile=[{
    "img":<img src={one} width={300} height={250} />,
     "vegi Name":"Wedding Events",
   },
   {
    "img":<img src={rake} width={300} height={250} />,
    "vegi Name":"Seminar",
    
   },
   {
    "img":<img src={s} width={300} height={250} />,
    "vegi Name":"Cultural Event",
     
   },
   {
    "img":<img src={rake1} width={300} height={250} />,
    "vegi Name":"Catering for Events",
     
   },
   {
    "img":<img src={s1} width={300} height={250} />,
    "vegi Name":"Birthday Parties",
     
   },
   {
    "img":<img src={rake2} width={300} height={250} />,
    "vegi Name":"Concert",
     
   }
]
  return (
    <div>
      <Navbar/>
    <div class="phone">
        <hr width="100%" size="3" /><center><h2> Events </h2></center><hr width="100%" size="3" />
      <Box p={10}>
      <Grid  container justifyContent="center" spacing={2}>
              {Mobile.map((sp)=>(<Grid item>
               <Paper key={sp.id} sx={{height:500 , width:350} } style={{border: '2px solid yellow'}}>
               {sp.img}<br/>{sp.Name}<br/>
                   <h3>Name:{sp['vegi Name']}</h3>
                   <Button variant="contained"><Link to='/CartApp'>BOOK NOW</Link> </Button>
               </Paper>
               
              </Grid>))}
          </Grid>
     </Box>
     </div>
    </div>
)
}