function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const currency = document.getElementById("currency").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/COP`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[currency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById("result").innerText = `Cantidad en COP: ${convertedAmount}`;
        })
        .catch(error => {
            console.error("Error al obtener la tasa de cambio:", error);
            document.getElementById("result").innerText = "Error al obtener la tasa de cambio. Inténtalo de nuevo más tarde.";
        });
}
