const apiKey = '774e48be10561ee8c5790932'

function loadCurrencies(){
    console.log('fdfdfdf')
    fetch('../scripts/currencies.json')
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        for (ele in data.Currencies){
            document.getElementById('to').innerHTML+=`
            <option>${ele[[1]]}</option>
            `
        }
    })
}
loadCurrencies()

function fetchRates(){
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
}