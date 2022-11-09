import React , {useEffect, useState}  from "react";
import Navbarrr from "./Afterloginnavbar";
import Cardservicename from "./Cardservicename";
import Footerr from "./Footer";
import Techcard from "./Techniciancard";
import { useParams } from "react-router-dom";
import axios  from "axios";
import GiveratingApp from "./Ratinggiving";
import Myorders from "./Myorder";
import { Button } from "@mui/material";


function Dashboard(){

     const data =  useParams();
     console.log(data.email);

     const [allTech , settech] = useState ([]);
     const [work , setwork] = useState ({});
     useEffect(() => {
        axios.get(`http://localhost:8080/api/technician/getbywork/${data.service}`).then((response) => {
          settech(response.data);
        //   console.log(response.data);
        //   console.log(allTech);
        });

        axios.get(`http://localhost:8080/api/worktype/${data.service}`).then((response) => {
            setwork(response.data);
            // console.log(response.data);
            // console.log(work);
          });

      }, []);

     

    return (

        <>
        

        
        
        <Navbarrr />
        <br/ >
       <center><a  href={`/api/orders/${data.email}`} className="btn btn-success">My orders</a></center> 
            <div className="conta">
                <div className='row' style={{paddingTop:'7rem',}}>
                    <Cardservicename 
                        headername= {data.service} 
                         servicedes={work.description}
                    />
                    

                    {
                            allTech.length > 0 ? allTech.map((item)=>(
                                <Techcard Emp={item} Cust={data.email} />
                                
                            )) 
                            :
                            "No technicians registered"
                             
                    }
                         
                                {/* <GiveratingApp techemail={allTech.email} cust={data.email} /> */}

                               
                           


                    {/* <Techcard
                        name="Deep clean AC service(window)"
                        techname="Mahendra Pratap"
                        prof="AC repairing"
                        qual="highschool"
                        gender="male"
                        age="45">
                    </Techcard>
                    <Techcard
                        name="Deep clean AC service(split)"
                        techname="Sambhavi singh"
                        prof="AC repairing"
                        qual="intermediate"
                        gender="Female"
                        age="50">
                    </Techcard>
                    <Techcard 
                        name="Installation AC(window/split)"
                        techname="James andrew"
                        prof="AC repairing and installation"
                        qual="Graduate"
                        gender="Male"
                        age="37"/> */}
                    
                </div>
            </div>
            <Footerr />
            
        </>
    );
}

export default Dashboard;