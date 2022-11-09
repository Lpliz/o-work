import axios from "axios";
import React from "react";
import { Button } from "reactstrap";




function Adtable({email,Srno,n,w,c,e,r}){

    return (

        <>
        
            <tbody>
                <tr>
                    <th scope="row">{Srno}</th>
                    <td>{n}</td>
                    <td>{w}</td>
                    <td>{c}</td>
                    <td>{e}</td>
                    <td>{r}</td>
                    <td><Button  color="danger" onClick={()=>{
                       axios.get(`http://localhost:8080/api/admin/deletetechnician/${email}`).then((response) => {
                       // settech(response.data);
                         console.log(response.data);
                         window.location.reload(false);
                        //console.log(Tech);
                      })
                    }}>Remove</Button>
                         </td>
                </tr>
            </tbody>
        </>
    );
}

export default Adtable;