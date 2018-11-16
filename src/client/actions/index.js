const baseUrl = 'https://iot-challenge-api.eu-de.mybluemix.net'

// /getdata    /getalerts

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(){
    return {
        type: FETCH_WEATHER
    }
}