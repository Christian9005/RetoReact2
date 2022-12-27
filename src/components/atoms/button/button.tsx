import React, {FC} from 'react';
import "./button.scss";

interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "large";
    variant?: "primary"| "border-right";
    onClick: () => void;
}

const Button: FC<ButtonProps> = ({children,size="small",variant="border-right",onClick}) => {
    return (

        <button onClick={onClick} className={`button button--${variant} button--${size}`}>
            <label className="button__label">{children}</label>
        </button>
    );
};

export default Button;
