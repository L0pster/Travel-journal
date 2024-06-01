import React from "react"
export default function Bars(prop) {
    return ( <a href={prop.link} target="_blank">
            <div className="card">
            <img className="card--image" alt="prety mountains" src={prop.img}/>
            <h3>{prop.Name}</h3>
            <h4 className="content">{prop.desc}</h4>
            </div>
            </a>
)
}