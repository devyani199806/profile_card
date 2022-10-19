import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


function App() {
  
  const [Data, setData] = useState([]);
  const [spacing, setSpacing] = React.useState(2);

  useEffect(() => {
    axios.get('http://localhost:3333/Profile').then((
    res) => {
      setData(res.data);
      console.log(res.data);
    })
  },[]);
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12} >
        <Grid container justifyContent="center" spacing={spacing}>
          {Data.map((data) => (
            <Grid style={{background:'white'}}key={data.id} item xs={6} md={3}>
              <Paper style={{background:'#0091ea',margin:'2px',padding:'10px'}}>
                  {/* <div className='img_div' >
                  <img className='img' src={data.image} alt="" />
                  </div>
                   */}
                  <Box style={{display:'flex', justifyContent: 'center'}}>
                    <Avatar alt="Remy Sharp" src={data.image} sx={{ width: 85, height: 96 ,border:'5px solid blue' }}/>
                  </Box>
                  <h2 style={{color:'#d7ccc8'}} align="center">{data.first_name + data.last_name}</h2>
                  <h5 style={{color:'#d7ccc8'}} align="center">{data.email}</h5>
                  <h4 style={{color:'#d7ccc8'}} align="center">{data.address}</h4>
                  <h5 style={{color:'#d7ccc8'}} align="center">{data.job_title}</h5>
                  <Box style={{display:'flex', justifyContent: 'center'}} >
                  <Button variant='contained' color="secondary">Message</Button>
                  <Button style={{color:'white'}}variant="outlined"  color="secondary">Following</Button>
                  </Box>
               
             </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
  
  );
}

export default App;
