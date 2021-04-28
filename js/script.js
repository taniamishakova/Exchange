{
    const calculateResult = (currency, amount) => {
        const rateUSD = 3.7855;
        const rateEUR = 4.5649;
        const rateUAH = 0.1356;

        switch (currency) {
            case "USD":
                return amount / rateUSD;


            case "EUR":
                return amount / rateEUR;


            case "UAH":
                return amount / rateUAH;

            default:
                result.innerText = "Ups… Coś poszło nie tak, spróbuj ponownie za kilka minut";
        }
    };

    const updateResultText = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(currency, amount);
        updateResultText(amount, currency, result);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}