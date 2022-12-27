import React, {FC} from 'react';
import "./input.scss";

interface InputProps {
    value: string;
    name: string;
    onChange : (value: string) => void;
    placeHolder: string;
}
const Input:FC<InputProps> = ({value,name,placeHolder,onChange}) => {
    return (
        <input
            name={name}
            value={value}
            className="input"
            placeholder={placeHolder}
            onChange={(e)=>onChange(e.target.value)}
        />
    );
};

export default Input;
