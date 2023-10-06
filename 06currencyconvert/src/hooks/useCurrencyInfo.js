import { useState, useEffect } from 'react';


function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState(null);

    useEffect(() => {
        async function fetchCurrencyInfo() {
            let res = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
            const data = await res.json();
            setCurrencyInfo(data);
        }
        fetchCurrencyInfo();
    }, [currency]);

    return currencyInfo;
}


export default useCurrencyInfo;
