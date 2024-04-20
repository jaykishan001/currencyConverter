import React from 'react'

function Input({label, amount, onAmountChange, currencyType = "usd", currencyOptions= [], onCurrencyChnage, amountRead = false}) {
  return (
    <div>
        <div className='flex my-2'>
            <label className='mx-3'>{label}</label>
            <input 
            className='border border-black'
            value={amount}
            placeholder='Amount'
            type='number'
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            readOnly={amountRead}
            />
            <div className='mx-3'>
            <p>Currency Type</p>
            <select 
            value={currencyType} 
            onChange={(e) => onCurrencyChnage && onCurrencyChnage(e.target.value)} >
                {currencyOptions.map((currency)=> 
              
                <option 
                key={currency} value={currency}>{currency}
                </option>)}
            </select>
            </div>

        </div>

    </div>
  )
}

export default Input