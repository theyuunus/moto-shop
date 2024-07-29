import React from 'react'
import './texts.scss'

const Title = ({
    className,
    as: Title = "h1",
    children,
    color = "rgba(211, 175, 55, 1)",
    ...props
}) => {
    return (
        <Title
            className={`${className}`}
            style={{
                color: color
            }}
            {...props}
        >
            {children}
        </Title>
    )
}

export default Title