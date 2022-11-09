import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios  from "axios";
import Navbarrr from "./Afterloginnavbar";
import Footerr from "./Footer";
import Feedbacktechnician from "./ReviewCard";
import GiveratingApp from "./Ratinggiving";

function Review()
{
    const data = useParams();
    console.log(data.email);
    console.log(data.custemail);
    const [rev,setrev] = useState([]);
    const [Tech , settech] = useState ({});
    useEffect(()=>{

        axios.get(`http://localhost:8080/api/reviews/${data.email}`).then((response) => {
            setrev(response.data);
            console.log(response.data);
            //console.log(work);
          });

          
    
         
             axios.get(`http://localhost:8080/api/technician/${data.email}`).then((response) => {
               settech(response.data);
               console.log(response.data);
               console.log(Tech);
             });
     
             
          

      }, []);
    return(
        <div>
            {/* customername,feedback,ratingvalue */}
            <Navbarrr />
            <div className="text-center">
            <h3>Name : {Tech.name}</h3>
             <h3>Profession : {Tech.areaofexpertise}</h3>
             </div>
            
            {
                rev.length > 0 ? rev.map((item)=>(
            <Feedbacktechnician customername={item.customeremail}  feedback={item.description}  ratingvalue={item.rating} technicianemail={item.technicianemail} />
                 )) 
             :
             "No reviews registered" 
            }

           
           
           
           
           
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <Footerr/>
        </div>

    );
}
export default Review;