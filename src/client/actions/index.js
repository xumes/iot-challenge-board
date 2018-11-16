import axios from 'axios'

const BASE_URL = 'https://iot-challenge-api.eu-de.mybluemix.net'  // /getdata    /getalerts

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_ALERTS = 'FETCH_ALERTS'

export function fetchWeather(){
    const url = `${BASE_URL}/getdata`
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER
    }
}

export function fetchAlerts(){
    const url = `${BASE_URL}/getalerts`
    const request = axios.get(url)
    return {
        type: FETCH_ALERTS
    }
}