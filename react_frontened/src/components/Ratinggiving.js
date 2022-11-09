import React , {useEffect, useState} from 'react';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField } from '@mui/material';
import { Button } from 'reactstrap';
import { toast, ToastContainer } from 'react-toastify';
import Navbarr from './Navbarr';
import { useParams } from 'react-router-dom';
import Footerr from './Footer';
  
export default function GiveratingApp() {
  const data=useParams();
  
  const [Rate , Addrate] = useState({technicianemail:data.techemail});
 useEffect(()=>{
 // Addrate({...Rate,technicianemail:techemail});
  Addrate({...Rate,customeremail:data.custemail});
 });
  
  
  return (
    <div  style={{ display: 'block', textAlign:'center' }}>
      <ToastContainer />
      <Navbarr />
      <br/><br/><br/><br/><br/><br/><br/>
      <h4>How much do you like our technician's work</h4>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">
            Please Rate here
        </Typography>
        <Rating
          name="Rating Label"
          
          onChange={(e)=>{
            Addrate({...Rate,rating:e.target.value}) }} 
        />
        <br/>
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          onChange={(e)=>{
            Addrate({...Rate,description:e.target.value}) }}
        />
        <br />
        
        <Button className='mt-1 ' color="success" onClick={()=>{
          axios.post(`http://localhost:8080/api/addreview`,Rate).then(
            (res)=>{
              console.log("success");
              toast.success("review added successfully");
              
            }
          );
        }} >Submit</Button>
      </Box>
      
      <Footerr />
    </div>
  );
}