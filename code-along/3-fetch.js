// 1. find form element
// 2. add event listener on form submit
// 3. on submit event:
//    a. get data from API URL 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//    b. calculate total bitcoin value in USD currency
//    c. modify output to display `Your _____ Bitcoin is worth ________ USD`

window.addEventListener('DOMContentLoaded', function () {
  let url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
  let bitcoinForm = document.querySelector('.bitcoin-form')
  bitcoinForm.addEventListener('submit', async function(event) {
    event.preventDefault()
    
    let response = await fetch(url)
    let json = await response.json()

    console.log(`The current price of bitcon is ${json.bpi.USD.rate_float}`)


    let currentPriceUSD = json.bpi.USD.rate_float
    let amountInput = document.querySelector('#amount')
    let amount = amountInput.value
    let totalValue = amount*currentPriceUSD

  })
})
