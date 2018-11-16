import React, { Component } from 'react'
import { connect } from 'react-redux'
import CelsiusFormat from '../components/CelsiusFormat';
import GMap from '../components/GMap';
import DateFormat from '../components/DateFormat';

class WeatherList extends Component {

    renderWeather(cityData) {
        return (
            <tr key={cityData._id}>
                <td><GMap city={cityData.payload} /></td>
                <td><DateFormat date={cityData.date} /></td>
                <td><CelsiusFormat 
                    temp={cityData.observation.temp} 
                    icon={cityData.observation.wx_icon}
                    city={cityData.observation.obs_name}
                    feels_like= {cityData.observation.feels_like}
                    wind= {cityData.observation.wspd}
                    phrase={cityData.observation.wx_phrase}
                    /></td>
            </tr>
        )
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Date</th>
                        <th>Weather Conditions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList)