import React, { useState } from 'react'
import useCurrencyInfo from './components/hooks/useCurrencyInfo';
import Input from './components/Input';

function App() {

  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options =  Object.keys(currencyInfo);

  function swap() {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  function convert () {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
   <form onSubmit= {(e) => 
    {
    e.preventDefault();
    convert();
   }}>
     <div>
      <div>
        <Input  
        label = "from" 
        amount={amount}
        currencyOptions={options}
        onAmountChange={(amount) => setAmount(amount)}
        currencyType={from}
        onCurrencyChnage={(items)=> setFrom(items)}
        />
      </div>
      <span onClick={swap}>swap</span>
      <div>
        <Input  
        label = "To" 
        amount={convertedAmount}
        currencyOptions={options}
        amountRead = {true}
        currencyType={to}
        onCurrencyChnage={(items)=> setTo(items)}
        />
      </div>
      <button>{`convert ${from} to ${to}`}</button>
    </div>
   </form>
  )
}

export default App