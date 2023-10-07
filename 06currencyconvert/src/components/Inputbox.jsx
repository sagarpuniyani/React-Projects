import PropTypes from 'prop-types';
import { useId } from 'react';
function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    const amountInputid = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputid}  className="text-black mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputid}
                    className="outline-none w-full  py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-500 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                    {currencyOptions.map((curr ) => 
                    (
                        <option  key={curr} value={curr } >
                            {curr}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

Inputbox.propTypes = {
    label: PropTypes.string.isRequired, // label is a required string
    amount: PropTypes.number, // amount is an optional number
    onAmountChange: PropTypes.func, // onAmountChange is an optional function
    onCurrencyChange: PropTypes.func, // onCurrencyChange is an optional function
    currencyOptions: PropTypes.array, // currencyOptions is an optional array
    selectCurrency: PropTypes.string, // selectCurrency is an optional string
    amountDisable: PropTypes.bool, // amountDisable is an optional boolean
    currencyDisable: PropTypes.bool, // currencyDisable is an optional boolean
    className: PropTypes.string, // className is an optional string
};



export default Inputbox;
