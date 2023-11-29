const list = document.getElementById('countries-list')

const getCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3/all')
        if (!response.ok) {
            throw new Error('Se ha producido un error', response.status)
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log('Error al obtener los datos', error)
    }
}

const generalTemplate = (data) => {
    data.forEach((country) => {
        console.log(country)
        const { flags, name } = country
        const [flag] = flags
        const { common: countryName } = name

        const general = `
        <div class="general">
            <img class="flag" src="${flag}" alt="${countryName}" />
            <p><span>${countryName}</span></p>
        </div>
    `
        list.innerHTML += general
    })
}

// const detailedTemplate = (data) => {
//     data.forEach((country) => {
//         const { flags, name, capital: cap, population, car } = country
//         const [flag] = flags
//         const { common: countryName } = name
//         const { side } = car

//         let capital = ''
//         !cap
//             ? capital = 'No disponible'
//             : capital = cap[0]

//         const detailed = `
//         <div class="hide">
//             <img src="${flag}" alt="${countryName}" />
//             <p><span>${countryName}</span></p>
//             <p>Capital: ${capital}</p>
//             <p>Población: ${population}</p>
//             <p>Lado de la carretera: ${side}</p>
//         </div>
//     `
//         list.appendChild(detailed)
//     })
// }

getCountries().then(data => { generalTemplate(data); 
    //detailedTemplate(data) 
})