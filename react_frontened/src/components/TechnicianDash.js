import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbarrr from "./Afterloginnavbar";
import Footerr from "./Footer";
import Mycartt from "./Mycart";
import TechCart from "./Techordercard";
import Navbarrrr from "./NavbarTech";



function TechDash() {
    const data = useParams();
    console.log(data); 
    // const { Data } = axios.get(`http://localhost:8080/api/customer/${data}`);
    const [TechData, setData] = useState({}); 
    const [orders,setorder]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/technician/${data.email}`).then(res=>{
            setData(res.data);
            console.log(res.data); 
        }).catch(err => {
            console.error(err); 
        })  
       
        axios.get(`http://localhost:8080/api/getallorders/${data.email}`).then(
            (res)=>{
                setorder(res.data);
                console.log(orders);
                console.log("sac");
                

            }
        ).catch(err=>{
            console.log(err);
        })
        

    }, []);

    return(

        <>
        <Navbarrrr />
        <Mycartt />

        {
        orders.length > 0 ? orders.map((item)=>(
            <TechCart custemail={item.customeremail} status={item.orderstatus} desc={item.description} date={item.date} orderidd={item.orderid}/>
        )) 
        :
         "No orders found" 
        }
            <br />
            
            <Footerr />
        </>

    );
}

export default TechDash;