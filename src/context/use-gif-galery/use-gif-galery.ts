import {useEffect, useState} from "react";
import {client} from "../../utils/services/client/client";

const useGifGalery = () => {
  const [gifsList, setGifsList] = useState([]);

  useEffect(() => {
    client.get(`?author_id=1005`)
        .then((response) => {
          console.log(response.data);
          setGifsList(response.data)
        })
  }, []);

  const addGif = (url:string) => {
    client.post(``,{
      "url":url,
      "author_id": 1005
    })
  };

  const deleteGif = (id:number) => {};

  return{
    gifsList,
    addGif,
    deleteGif
  };
}

export default useGifGalery;