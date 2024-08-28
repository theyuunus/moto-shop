import React from "react";

const Typography = ({
    className,
    children,
    name: Typography = "p",
    color = "#D3AF37",
    ...props
}) => {
    return (
        <Typography
            name={name}
            className={className}
            style={{ color: color }}
            {...props}
        >
            {children}
        </Typography>
    )
}

export default Typography