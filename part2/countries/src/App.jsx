import { useState, useEffect } from 'react'
import countriesService from './services/countriesService'

import { Countries } from './components/Countries.jsx'

const App = () => {
    const [countryName, setCountryName] = useState(null)
    const [countries, setCountries] = useState(null)

    useEffect((countries) => {
        countriesService
            .getAll()
            .then(countries => setCountries(countries))
    }, [])

    return (
        <div>
            <label htmlFor='countrySearch'>find countries <input id='countrySearch' type='text' onChange={e => setCountryName(e.target.value)} /></label>
            <Countries countries={countries} countryName={countryName} />
        </div>
    )
}

export default App
