function procurar(){
    let pais = document.getElementById('pais').value
    let finalURL =`https://restcountries.com/v3.1/name/${pais}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        console.log(data[0].capital[0])
        console.log(data[0].population)
        console.log(data[0].continents[0])

        let bandeira = document.getElementById('bandeira')
        let nome = document.getElementById('nome')
        let cap = document.getElementById('cap')
        let pop = document.getElementById('pop')
        let cont = document.getElementById('cont')

        nome.innerHTML = pais
        cap.innerHTML = data[0].capital[0]
        pop.innerHTML = data[0].population
        cont.innerHTML = data[0].continents[0]
        bandeira.src = data[0].flags.svg


    })
}

