import React from "react";
import axios from "axios";
import { Button } from "reactstrap";
function Addtable({name,d,a}){

    return (

        <>
        
            <tbody>
                <tr>
                    <td></td>
                    <td>{name}</td>
                    <td>{d}</td>
                    <td>{a}</td>
                    <td><Button color="danger" onClick={()=>{
                       axios.get(`http://localhost:8080/api/admin/deletework/${name}`).then((response) => {
                       // settech(response.data);
                         console.log(response.data);
                         window.location.reload(false);
                        //console.log(Tech);
                      })
                    }} >Remove</Button>
                    
                    </td>
                </tr>
            </tbody>
        </>
    );
}

export default Addtable;