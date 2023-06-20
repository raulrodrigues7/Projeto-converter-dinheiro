const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector("currency-value-to-convert")
    const currencyValueConverted = document.querySelector("currency-value")

    console.log(currencySelect.value)
    const dolarToday = 5.2
    const Eurotoday = 6.2


    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / Eurotoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)



    console.log(convertedValues)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImagem = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImagem.src = "./assets/Dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImagem.src = "./assets/Euro.png"
    }
}

convertValues()

currencySelect.addEventListener("change,")
convertButton.addEventListener("click", convertedValues)