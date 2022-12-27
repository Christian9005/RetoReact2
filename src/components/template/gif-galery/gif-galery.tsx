import React from 'react';
import "./gif-galery.scss";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import GiftsList from "../../organisms/gifts-list/gifts-list";
const GifGalery = () => {
    return (
        <div className="git-galery">
            <h2 className="git-galery__title">Gif Galery</h2>
            <div className="git-galery__header">
                <Input
                    value={""}
                    name="addGif"
                    onChange={()=>{}}
                    placeHolder={"Gift URL"}
                />
                <Button
                    variant="border-right"
                    onClick={()=>{}}>
                    Agregar
                </Button>
            </div>
            <GiftsList gifts={[]}/>
        </div>
    );
};

export default GifGalery;
