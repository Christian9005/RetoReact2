import React, {createContext, FC, useContext} from "react";
import useGifGalery from "../use-gif-galery/use-gif-galery";
import {Gift} from "../../utils/interfaces/gift";

export interface GifGaleryStateContext{
    gifsList: Gift[];
    addGif: (url:string) => void;
    deleteGif: (id:number) => void;
}

export interface GifGaleryProviderProps {
    children: React.ReactNode;
}

export const useGifGaleryContext =()=> useContext(GifGaleryContext);

export const GifGaleryContext = createContext<GifGaleryStateContext>(
    {} as unknown as GifGaleryStateContext
);

export const GifGaleryProvider: FC<GifGaleryProviderProps> =({children}) => {
  const values = useGifGalery();
  return <GifGaleryContext.Provider value={values}>{children}</GifGaleryContext.Provider>
};