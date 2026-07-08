import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const get = (city) => axios
    .get(baseUrl, {
        params: {
            'q': city,
            'appid': import.meta.env.VITE_OPEN_WEATHER_MAP_KEY,
            'units': 'metric'
        }
    })
    .then(response => response.data)

export default { get }
