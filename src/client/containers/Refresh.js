import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather, fetchAlerts } from './../actions'

class Refresh extends Component {
    constructor(props) {
        super(props)

        this.state = {
            weather: '',
            alert: ''
        }

        this.onRefreshClick = this.onRefreshClick.bind(this)

        //call the refresh on the first load
        this.props.fetchWeather()
        this.props.fetchAlerts()
    }

    onRefreshClick(event) {
        event.preventDefault()

        this.props.fetchWeather()
        this.props.fetchAlerts()
    }

    render() {
        return (
            <div>
                <button onClick={this.onRefreshClick} className='btn btn-primary btn-lg btn-block'>Refresh</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather, fetchAlerts }, dispatch)
}

export default connect(null, mapDispatchToProps)(Refresh)