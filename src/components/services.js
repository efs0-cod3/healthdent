import React from "react";
import { FaTooth } from "react-icons/fa";
import "./service.css"
// import { GiTooth, GiAncientScrew } from "react-icons/gi";


const  Services = ({style, title}) => {

return (
    <div className="card">
    <FaTooth style={style}/>
    <h1>{title}</h1>
    <p>Some text about the jeans..</p>
    </div> 
)

}

export default Services