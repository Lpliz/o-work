import React from "react";

function Cardservicename({headername,servicedes}){

    return (

        <>
            <div className="text-center" style={{paddingLeft:'25rem'}}>
                <div className="card" style={{textAlign:'center',width:'40rem',backgroundColor:'#CCEEFF'}}>
                    <div className="card-body">
                        <h5 className="card-title" style={{fontSize:'60px'}}>{headername}</h5>
                        <p className="card-text" style={{fontSize:'20px'}}>{servicedes}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardservicename;