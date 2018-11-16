import React, { Component } from 'react'
import {connect} from 'react-redux'

class WeatherList extends Component {
    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Real Feel</th>
                        <th>Pressure</th>
                    </tr>
                </thead>
                <tbody>
                {JSON.stringify(this.props)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)