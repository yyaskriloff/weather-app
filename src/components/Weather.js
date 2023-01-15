import React from 'react';
import '../styles.css';
import { Button } from 'semantic-ui-react'
import moment from 'moment';

const refresh = () => {
    window.location.reload();
}

const Weather = ({ data }) => (
    <div className="main">
        <div className="top">
            <p className="header">{data.name}</p>
            <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
        <div className="flex">
            <p className="day">Day: {moment().format('dddd')}</p>
            <p className="day">{moment().format('LL')}</p>
        </div>

        <div className="flex">
            <p className="temp">Temprature: {data.main.temp} &deg;C</p>
            <p className="temp">Humidity: {data.main.humidity} %</p>
        </div>

        <div className="flex">
            <p className="sunrise-sunset">Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p className="sunrise-sunset">Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
        </div>

    </div>
)

export default Weather;