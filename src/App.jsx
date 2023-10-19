import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';



function App() {
  const [amount, setAmount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  const [savings, setSavings] = useState(0)

  const calculate = (e) => {
    const output = amount * discount / 100


    const save = amount - output
    console.log(output);
    console.log(save);

    setTotal(output)
    setSavings(save)
  }
  const clear = (e) => {
    setAmount(0)
    setDiscount(0)
    setTotal(0)
    setSavings(0)
  }

  console.log(amount, discount);






  return (
    <div className="App">
      <div className='fullcontent d-flex'>


        <div className='main shadow'>
          <div className='head'>
            <h1>Discount Calculator</h1>
          </div>
          <div className='form'>
            <TextField id="outlined-basic" label="Amount" className='TextField'
              onChange={(e) => setAmount(e.target.value)} value={amount || ""} variant="outlined" />
            <TextField id="outlined-basic" label="Discount Rate" className='TextField'
              onChange={(e) => setDiscount(e.target.value)} value={discount || ""} variant="outlined" />


          </div>
          <div className='text-center mt-5'>
            <button onClick={calculate} className='btn1 me-3'>Calculate</button>
            <button onClick={clear} className='btn2'>Reset</button>
          </div>
          <div className='result'>
            <p>Total amount : &#8377; {total}</p>
            <p>Savings : &#8377; {savings}</p>
          </div>

        </div>

        <div className='content'>
       
          <h4>How does Discount Calculators Work?</h4>
          <br />
          <p>You can calculate the discount as a percentage as follows. For example, you may want to calculate the sale price of a shirt that regularly costs Rs 1,000. <br /><br />
            If the shirt is 20% off, you must convert 20% to a decimal (20/100 = 0.2). You have Rs 1,000 * 0.2 = Rs 200. You then subtract the discount from the original price as Rs 1,000 – Rs 200 = Rs 800. The shirt is on sale for Rs 800. You have saved Rs 200 on the purchase of the shirt. <br /><br />
            You can calculate the discount as a fixed amount as follows. For example, you have a discount of Rs 300 on a shirt that costs Rs 1,500. The price after the discount is Rs 1,200. The discount percentage is:= 300/1500 = 20% (amount of discount/Cost of the shirt).</p>
        </div>

      </div>
    </div>
  );
}

export default App;