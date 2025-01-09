const apiKey = '774e48be10561ee8c5790932'
function loadCurrencies(){
    console.log('fdfdfdf')
    fetch('../scripts/currencies.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        for (ele in data.Currencies){
            document.getElementById('to').innerHTML+=`
            <option value ='${data.Currencies[ele][0]}'>${data.Currencies[ele][1]}</option>
            `
            document.getElementById('from').innerHTML+=`
            <option value ='${data.Currencies[ele][0]}'>${data.Currencies[ele][1]}</option>
            `
        }
    })
}

function fetchRates(){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
    .then((res)=>res.json())
    .then((data)=>{
        localStorage.setItem('rates',JSON.stringify(data.conversion_rates))
    })
}

function convert(){
    let rates = JSON.parse(localStorage.getItem('rates'))
    let to = document.getElementById('to').value
    let from = document.getElementById('from').value
    let currency = document.getElementById('currency').value
    let convereted_curr = ((rates['USD']/rates[from])*rates[to]) * currency
    document.getElementById('currency_converted').value =convereted_curr.toFixed(3)
}