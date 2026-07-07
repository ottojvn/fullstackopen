export const Countries = ({ countries, countryName }) => {
    if (!countries) {
        return <div></div>
    }

    const shownCountries = countries.filter(country => country.name.common.includes(countryName ? countryName : ''))
    console.log(shownCountries)

    return (
        <div>
            {
                shownCountries.length > 10
                    ? <p>Too many countries</p>
                    : shownCountries.length > 1
                        ? shownCountries.map(country =>
                            <div key={country.name.official}><p>{country.name.common}</p></div>
                        )
                        : shownCountries.map(country =>
                            <div key={country.name.official}>
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
                            </div>
                        )
            }
        </div>
    )
}
