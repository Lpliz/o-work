import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function TechDash() {
    const data = useParams();
    console.log(data); 
    // const { Data } = axios.get(`http://localhost:8080/api/customer/${data}`);
    const [Data, setData] = useState([]); 
    
    useEffect(() => {
        axios.get(`http://localhost:8080/api/technician/${data.email}`).then(res=>{
            setData(res.data);
           // console.log(res.data); 
        }).catch(err => {
            console.error(err); 
        }) ; 

    }, []);

    return(

        <div>
            this is technician dashboard ;
            
            
        </div>

    );
}

export default TechDash;