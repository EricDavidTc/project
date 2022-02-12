import React from "react";
import './card.styles.css'

export const Card = ({monster}) => {
    return <div className="card-container">
        <img src={`https://robohash.org/${monster.id}?set=set4&size=180x180`} alt="monster" />
        <h2 className="monster-name">{monster.name}</h2>
        <p className="">{monster.email}</p>
    </div>
  
}