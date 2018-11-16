import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCH_ALERTS = 'FETCH_ALERTS'

export function fetchWeather(){
    const url = '/api/weather'
    const request = axios.get(url)
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

export function fetchAlerts(){
    const url = '/api/alert'
    const request = axios.get(url)
    return {
        type: FETCH_ALERTS,
        payload: request
    }
}