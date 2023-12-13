import React, { useEffect } from "react";

const Helmet = (props) => {
    useEffect(() => {
        document.title = `Two Wheelers - ${props.title}`;
    }, [props.title]);

    return <div>{props.children}</div>;
};

export default Helmet;
