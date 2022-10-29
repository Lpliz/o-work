import React , {useEffect , useState } from "react";
import axios  from "axios";
import {useNavigate} from "react-router-dom";
import {toast , ToastContainer} from "react-toastify";
import baseurl from "../api/bootapi";
import Tech from "./Tech";
import {Button} from "reactstrap";
import Aboutus from "./Aboutus";
const Showalltech=() => {

    useEffect ( () => {
        document.title="All technicians";
    } , []
    );

const navigate = useNavigate();

const Getalltech = () => {

    axios.get(`${baseurl}/findall`).then(
        (response) => {
            
            console.log(response.data);
            toast.success("great");
            setemp(response.data);
        } 
    );

};
useEffect ( () => {
    
    Getalltech();

} , []
);

const [allemp , setemp] = useState ([]);
const Navigatehome=()=>{
    navigate("/");
}

return(
    <div>
        <div class="shadow p-3 mb-5 bg-white rounded  my -5">
            
            <Button color="secondary" onclick={{Navigatehome}}>Home</Button>
        <h1 align="center">List of all technicians</h1>
        </div>
    <ToastContainer />

    {
        allemp.length > 0 ? allemp.map((item)=>(
            <Tech Emp={item} />
        )) 
        :
         "No technicians registered" 
    }

    

    </div>

);

}
export default Showalltech;