import React from 'react';
import "./gif-galery.scss";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";
import GiftsList from "../../organisms/gifts-list/gifts-list";
import {useGifGaleryContext} from "../../../context/gif-galery-context/gif-galery-context";
import useAddGif from "./use-add-gif/use-add-gif";
const GifGalery = () => {

    const {gifsList, addGif} = useGifGaleryContext();
    const {url,handleChangeUrl} = useAddGif();

    return (
        <div className="git-galery">
            <h2 className="git-galery__title">Gif Galery</h2>
            <div className="git-galery__header">
                <Input
                    value={url}
                    name="addGif"
                    onChange={handleChangeUrl}
                    placeHolder={"Gift URL"}
                />
                <Button
                    variant="border-right"
                    onClick={()=>addGif(url)}>
                    Agregar
                </Button>
            </div>
            <GiftsList gifts={gifsList}/>
        </div>
    );
};

export default GifGalery;
