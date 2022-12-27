import {useState} from "react";

const useAddGif = () => {
  const [url, setUrl] = useState("");

  const handleChangeUrl = (value:string) => {
    setUrl(value);
  };

  return {url, handleChangeUrl};
}

export default useAddGif;