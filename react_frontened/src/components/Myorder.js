import React, { useEffect, useState } from "react";
import Mycartt from "./Mycart";
import Cart from "./Cart";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbarrr from "./Afterloginnavbar";
import Footerr from "./Footer";
function Myorders()
{
    const data = useParams();
    console.log(data);
    const [orders,setorder]=useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/allorders/${data.email}`).then(
            (res)=>
            {
                setorder(res.data);
                console.log(orders);
                console.log("sachin");
                

            }
        )
        

    },[]);
    return(
        <div>
            <Navbarrr />
        <Mycartt />
        {
            orders.length > 0 ? orders.map((item)=>(
            <Cart tchemail={item.technicianemail} status={item.orderstatus} desc={item.description} date ={item.date} custemail={data.email}/>
        )) 
        :
         "No orders registered" 
        }
          {/* <Cart
            servicename="AC/RO Appliance"
            name="Andrew"
            phone="+918318351970"
            status="Pending"
            /> */}
            <br />
            <Footerr />
        </div>

    );
}
export default Myorders;