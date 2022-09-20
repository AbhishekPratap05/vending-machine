import React from 'react'
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useVendingContext } from './vendingContext';
import  {actions} from './vendingReducer'

export default function MoneySlot() {

  const {state,dispatch} = useVendingContext();

    const handleChange = (event) => {
        const amount =  event.target.value;
        dispatch({type:actions.userEnteredAmount, amount:amount});
    };

  return (
    <div><h3>Enter Money</h3>
    <InputLabel htmlFor="money-input">Amount</InputLabel>
          <OutlinedInput
            id="money-input"
            type="number"
            value={state.enteredAmount}
            onChange={(e)=>handleChange(e)}
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
          />
          <div><h3>Amount Remaining</h3>{state.remainingAmount}</div>
    </div>
    
  )
}
