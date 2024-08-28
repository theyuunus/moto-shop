import React from "react";
import ButtonStyle from './button.module.scss'

const Button = ({
    className,
    children,
    type = "button",
    fontSize = 20,
    fontWeight = 400,
    onClick,
    ...props
}) => {
    return (
        <>
            <button
                className={`${ButtonStyle["button"]} ${className}`}
                type={type}
                style={{ fontSize: fontSize, fontWeight: fontWeight }}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        </>
    )
}

export default Button;
