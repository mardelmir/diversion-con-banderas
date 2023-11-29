const list = document.getElementById('countries-list')

const getCountries = async () => {
    try {
        const response = await fetch('https://restcountries.com/v3/all')
        if (!response.ok) {
            throw new Error('Se ha producido un error', response.status)
        }
        const data = await response.json()
        const sorted = data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        return sorted
    }
    catch (error) {
        console.log('Error al obtener los datos', error)
    }
}

const template = (sorted) => {
    sorted.forEach((country) => {
        const { flags, name, capital: cap, population, car } = country
        const [, flag] = flags
        const { common: countryName } = name
        const { side } = car

        let capital = ''
        !cap
            ? capital = 'No disponible'
            : capital = cap[0]
// PEND: onclick="show()" + onclick="hide()"
        const general = `
        <div class="general" onlcick="show()">
            <img class="flag" src="${flag}" alt="${countryName}" />
            <p><span>${countryName}</span></p>
            <div class="hide","detailed" onclick="hide()">
                <img src="${flag}" alt="${countryName}" />
                <p><span>${countryName}</span></p>
                <p>Capital: ${capital}</p>
                <p>Población: ${population}</p>
                <p>Lado de la carretera: ${side}</p>
            </div>
        </div>`
        list.innerHTML += general
    })
}

const show = () => {
    console.log('hola')
}

// const clickar = (clk) => {
//     const targetElement = clk.target;
//     if (targetElement !== userInput && userInput.value) {
//         proceed();
//     }
// };

getCountries().then(sorted => template(sorted))

// detailedTemplate(sorted)
// const detailedTemplate = (data) => {
//     data.forEach((country) => {
//         const { flags, name, capital: cap, population, car } = country
//         const [, flag] = flags
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
//         </div>`
        
//         let float = document.createElement('div')
//         float.innerHTML += detailed

//         list.insertAdjacentElement('afterend', float)
//     })
// }