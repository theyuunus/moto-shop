import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../components/container/container'
import Button from '../../components/button/button'
import Title from '../../components/texts/title'
import Card from '../../components/card/card'
import Text from '../../components/texts/text'

const Design = () => {
    return (
        <>
            <Helmet>
                <title>Moto - Design</title>
            </Helmet>
            <Container>
                <Button>
                    button component
                </Button>

                <Title as='h2'>
                    title
                </Title>

                <Text>
                    text
                </Text>

                <Card
                    title={"Triumph Street Triple R (2020)"}
                    type={"New"}
                    price={"6,899"}
                    stock={5}
                    color={"green, blue"}
                />
            </Container>
        </>
    )
}

export default Design