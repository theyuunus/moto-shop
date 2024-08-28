import React from 'react';
import CardStyles from './card.module.scss';
import Components from '../index';
import Notfound from '../../images/card404.avif'

const Card = ({
    className,
    img,
    imgTitle,
    title,
    type,
    price,
    stock,
    color,
    ...props
}) => {
    return (
        <div className={`${className} ${CardStyles["card"]}`} {...props}>
            <img
                src={img ? img : Notfound}
                alt={imgTitle}
                className={CardStyles["img"]}
            />

            <div className={CardStyles["div"]}>
                <Components.Typography name='h1' className={CardStyles["title"]}>{title}</Components.Typography>
                <Components.Typography className={CardStyles["type"]}>{type}</Components.Typography>
            </div>

            <Components.Typography name='h2' className={CardStyles["price"]}>${price}</Components.Typography>

            <div className={CardStyles["div"]}>
                <Components.Typography>Stock: {stock}</Components.Typography>
                <Components.Typography>Color(s): <br /> {color}</Components.Typography>
            </div>

            <Components.Button className={CardStyles["button"]}>
                Details
            </Components.Button>
        </div>
    );
}

export default Card;
