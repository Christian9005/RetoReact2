import {useState} from "react";

const useGifGalery = () => {
  const [gifsList, setGifsList] = useState([]);

  const addGif = (url:string) => {
    console.log("url",url);
  };

  const deleteGif = (id:number) => {};

  return{
    gifsList,
    addGif,
    deleteGif
  };
}

export default useGifGalery;