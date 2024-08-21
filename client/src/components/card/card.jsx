import React from 'react';
import CardStyles from './card.module.scss';
import Title from '../texts/title';
import Text from '../texts/text';
import Notfound from '../../images/card404.avif'
import Button from '../button/button';

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
                <Title className={CardStyles["title"]}>{title}</Title>
                <Text className={CardStyles["type"]}>{type}</Text>
            </div>

            <Title as='h2' className={CardStyles.price}>${price}</Title>

            <div className={CardStyles["div"]}>
                <Text>Stock: {stock}</Text>
                <Text>Color(s): <br /> {color}</Text>
            </div>

            <Button className={CardStyles["button"]}>
                Details
            </Button>
        </div>
    );
}

export default Card;
