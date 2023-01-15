import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react'

const CardExampleCard = ({ data }) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name: {data.name}</Card.Header>
            <p>Temprature: {data.main.temp}</p>
            <p>Sunrise: {data.sys.sunrise}</p>
            <p>Sunset: {data.sys.sunset}</p>
            <p>Description: {data.weather[0].description}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;