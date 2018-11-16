import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather, fetchAlerts } from './../actions'

class Refresh extends Component {
    constructor(props) {
        super(props)

        this.onRefreshClick = this.onRefreshClick.bind(this)
    }

    onRefreshClick(event) {
        event.preventDefault()
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