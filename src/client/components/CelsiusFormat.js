import React from 'react'

const CelsiusFormat  = props => {
        // Build class names with dynamic data
        var bgColorClass = 'weather-widget '; // very-warm, warm, normal, cold, very-cold

        //import the icon
        //const icon = require('./../weathericons/icon' + props.icon + '.png')

        // Set the background colour based on the temperature
        if (props.temp >= 30) {
            bgColorClass += 'very-warm';
        }
        else if (props.temp > 20 && props.temp < 30) {
            bgColorClass += 'warm';
        }
        else if (props.temp > 10 && props.temp < 20) {
            bgColorClass += 'normal';
        }
        else if (props.temp > 0 && props.temp < 10) {
            bgColorClass += 'cold';
        }
        else if (props.temp <= 0) {
            bgColorClass += 'very-cold';
        }

        return (
            <div className={bgColorClass}>
                <h1 className="city">{props.city}</h1>
                <div className="weather">
                <p>icon</p>
                </div>
                <section className="weather-details">
                    <div className="temp"><span className="temp-number">{props.temp}</span></div>
                    <div className="humidity"><i className="fas fa-temperature-high"></i>{props.feels_like} C</div>
                    <div className="wind"><i className="fas fa-wind"></i>{props.wind} km/h</div>
                </section>
            </div>
        )
}

export default CelsiusFormat