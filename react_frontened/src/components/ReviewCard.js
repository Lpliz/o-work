import React ,{useEffect,useState} from 'react';
import Reviewcard from './Ratingstyle';
import axios from 'axios';

function Feedbacktechnician({customername,feedback,ratingvalue,technicianemail}) {


   



  return (
    <div className='row' style={{paddingLeft:"15rem" , paddingTop:"7rem"} }>
        
        <br />
        <br />
        <div className='Card' style={{width:'50rem',backgroundColor:'#03fc9d'}}>
        <div className="Card-Body">
            <h6>
               Customer Email :  {customername}
            </h6>     
            <h1>
                <Reviewcard ratingvalue={ratingvalue}/>
            </h1>
            <div className='Card' style={{width:"30rem"}}>
                <div className='Card-Body'>
                    <p>
                       Description: {feedback}
                    </p>
                </div>
            </div>
            
            </div> 
        </div>
    </div>
        
  );
}

export default Feedbacktechnician;