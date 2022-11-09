import React from "react";
import { useParams } from "react-router-dom";

function MainCustDash()
{
   const data =  useParams();
   console.log(data);

    return(
        <div>
            <h1>this is main customer</h1>

        </div>


    );
    

}

export default MainCustDash;