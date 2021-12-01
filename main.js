let residentBtn = document.querySelector('#get-residents')

let getResidents = () => {
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res) => {
        // console.log(res.data)
        // const alderaan = res.data.results[0]
        // console.log(alderaan)
        const {residents} = res.data.results[0]
        // console.log(residents)
        for(resident of residents){
            axios.get(resident)
            .then((res) => {
                const {name} = res.data
                const h2 = document.createElement('h2')
                h2.textContent = name
                const body = document.querySelector('body')
                body.append(h2)
            })
        }
    })

}
residentBtn.addEventListener('click', getResidents)