import { useState, useEffect } from 'react'
import weatherService from '../services/weatherService.js'

const CountryDetails = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    weatherService
      .get(country.capital[0])
      .then(weather => {
        setWeather(weather)
        console.log(weather)
      })
  })

  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {
          Object.keys(country.languages).map(lang =>
            <li key={lang}>{country.languages[lang]}</li>
          )
        }
      </ul>
      <img src={country.flags.png} alt={country.flag.alt} />
      {
        weather && <div>
          <p>Temperature {weather.main.temp} celsius</p>
          <img
            src={`https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description} />
          <p>Wind {weather.wind.speed} m/s</p>
        </div>
      }
    </div>
  )
}

const CountryListItem = ({ country, fullInfo = false }) => {
  const [renderInfo, setRenderInfo] = useState(fullInfo)
  if (renderInfo) {
    return (
      <div>
        <CountryDetails country={country} />
        <button onClick={() => setRenderInfo(!renderInfo)}>Hide</button>
      </div>
    )
  }
  return (
    <div>
      <p>
        {country.name.common} <button onClick={() => setRenderInfo(!renderInfo)}>Show</button>
      </p>
    </div>
  )
}

export const Countries = ({ countries, countryName }) => {
  if (!countries) {
    return <div></div>
  }

  const shownCountries = countries.filter(country => country.name.common.includes(countryName ? countryName : ''))

  return (
    <div>
      {
        shownCountries.length > 10
          ? <p>Too many countries</p>
          : shownCountries.length > 1
            ? shownCountries.map(country =>
              <CountryListItem key={country.name.official} country={country} fullInfo={false} />

            )
            : <CountryDetails country={shownCountries.at(0)} />
      }
    </div>
  )
}
