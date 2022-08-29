const countrySite = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))
}


const displayCountry = countrys => {
    const countryName = document.getElementById('find-country')
    for (const country of countrys) {
        console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('countrys')
        countryDiv.innerHTML = `
        <h1> Name: ${country.name.common} </h1>
        <h3> Capital:  ${country.capital}  </h3>
        <h3> Boarder: ${country.borders} </h3>
        <button onclick="countryAbout('${country.cca2}')"> About </button>
        


        
        
        
        `;
        countryName.appendChild(countryDiv)
    }
}
const countryAbout = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetals(data[0]))

}

const displayCountryDetals = country => {
    console.log(country)
    const countryDetals = document.getElementById('country-detals')
    countryDetals.innerHTML = `
    <h2> Detals: ${country.name.common}, ${country.capital}  </h2>
    <img src=" ${country.flags.png} "> 

    
    
    `
}


countrySite()