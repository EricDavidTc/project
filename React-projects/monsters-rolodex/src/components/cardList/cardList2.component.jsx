import React from "react";
import './cardList.styles.css'
import { Card2 } from "../card/card2.components";


export const CardList2 = (props) => {
    return <div className="card-list">
        {props.monsters.map(monster => <Card2 key={monster.id} monster={monster}></Card2>)}
    </div>
    
}