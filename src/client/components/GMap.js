import React, {Component} from 'react'



class GMap extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        console.log(this.props)
        const position = this.props.city.split(",")
        const lat = parseFloat(position[0])
        const lon = parseFloat(position[1])

        console.log("latitude", lat)
        console.log("longitude", lon)
        const google = window.google;
        new google.maps.Map(this.refs.map, {
            zoom: 18,
            center: {
                lat: lat,
                lng: lon
            }
        })
    }

    render() {
        return <div ref="map" />
    }
    
}

export default GMap