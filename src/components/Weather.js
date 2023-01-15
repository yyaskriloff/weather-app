import React from 'react';
import '../styles.css';
import { Card } from 'semantic-ui-react'
import moment from 'moment';

const Weather = ({ data }) => (
    <div className="main">
        <p className="header">{data.name}</p>
        <div>
            <p className="day">Day: {moment().format('dddd')}</p>
        </div>

        <div>
            <p className="temp">Temprature: {data.main.temp} &deg;C</p>
        </div>

    </div>
)

export default Weather;