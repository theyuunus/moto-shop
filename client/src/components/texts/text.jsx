import React from 'react'
import './texts.scss'

const Text = ({
    className,
    children,
    color = "rgba(211, 175, 55, 1)",
    fontSize = 20,
    ...props
}) => {
    return (
        <p
            className={className}
            style={{ color: color, fontSize: fontSize }}
            {...props}
        >
            {children}
        </p>
    )
}

export default Text