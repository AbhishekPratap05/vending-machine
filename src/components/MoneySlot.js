import React from 'react'
import Input from '@mui/material/Input'
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
export default function MoneySlot() {

    const handleChange = (event) => {
        const amount = isNaN(event.target.valueAsNumber) ? 0 : event.target.valueAsNumber;
        console.log(amount)
    };

  return (
    <div><h3>Enter Money</h3>
    <InputLabel htmlFor="money-input">Amount</InputLabel>
          <OutlinedInput
            id="money-input"
            type="number"
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
    </div>
  )
}
