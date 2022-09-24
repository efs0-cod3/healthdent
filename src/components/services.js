import React from "react";
import { FaTooth } from "react-icons/fa";
import "./service.css"
// import { GiTooth, GiAncientScrew } from "react-icons/gi";


const  Services = ({style, service, description}) => {

return (
    <div className="card">
   <div>
   <FaTooth style={style}/>
   </div>
    <div className="card-text">
    <h1>{service}</h1>
    <p>{description}</p>
    </div>
    </div> 
)

}

export default Services