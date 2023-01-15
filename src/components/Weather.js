import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';

const CardExampleCard = ({ data }) => (
    <Card>
        <Card.Content>
            <Card.Header className="header">City Name: {data.name}</Card.Header>
            <p>Temprature: {data.main.temp} &deg;C</p>
            <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Description: {data.weather[0].main}</p>
            <p>Humidity: {data.main.humidity} %</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard;