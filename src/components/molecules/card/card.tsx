import React, {FC} from 'react';
import "./card.scss";
import Button from "../../atoms/button/button";
import Img from "../../atoms/img/img";

interface CardProps {
    source:string;
}
const Card:FC<CardProps> = ({source}) => {
    return (
        <div className="card">
            <Img source={source}/>
            <Button
                size={"large"}
                variant={"primary"}
                onClick={()=>console.log("eliminar")}
                children={"Eliminar"}/>
        </div>
    );
};

export default Card;
