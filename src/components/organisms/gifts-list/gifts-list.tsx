import React, {FC} from 'react';
import "./gifts-list.scss";
import Card from "../../molecules/card/card";
import {Gift} from "../../../utils/interfaces/gift";

interface GiftsListProps {
    gifts: Gift[];
}
const GiftsList:FC<GiftsListProps> = ({gifts}) => {
    if (gifts.length === 0) return <h3 className="gifts-list__title"> No posee gifs</h3>

    return (
        <div className="gifts-list">
            {gifts?.map((gif, index)=>(
                <Card key={`gif-${index}`} source={gif.url}/>
            ))}
        </div>
    );
};

export default GiftsList;
