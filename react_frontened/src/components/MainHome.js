import React from "react";
import Centre from "./Centre";
import Footerr from "./Footer";

import Works from "./Howitworks";

import Navbarr from "./Navbarr";
import RatingApp from "./Rating";
import Service from "./Service";

export default function MainHome(){

    return (

        <div>
           
           <Navbarr />
           <Centre />
           <Works />
           <Service />
           <Footerr />
            
        </div>

    );
}


