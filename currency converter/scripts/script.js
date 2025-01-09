const apiKey = '774e48be10561ee8c5790932'

function loadCurrencies(){
    console.log('fdfdfdf')
    fetch('../scripts/currencies.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        for (ele in data.Currencies){
            document.getElementById('to').innerHTML+=`
            <option value '${data.Currencies[ele][0]}'>${data.Currencies[ele][1]}</option>
            `
            document.getElementById('from').innerHTML+=`
            <option value '${data.Currencies[ele][0]}'>${data.Currencies[ele][1]}</option>
            `
        }
    })
}

function fetchRates(){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
}