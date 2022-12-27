import React, {FC} from 'react';
import "./img.scss";
interface ImgProps{
    source: string;
}
const Img:FC<ImgProps> = ({source}) => {
    return (
        <img
            className="img"
            src={source}
        />
    );
};

export default Img;
