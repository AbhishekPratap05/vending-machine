import React, { useEffect, useState } from 'react'
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import { useVendingContext } from './vendingContext';
import { actions } from './vendingReducer'

export default function MoneySlot() {

  const { state, dispatch } = useVendingContext();
  const [remainingAmount, setRemainingAmount] = useState(new Map())


  useEffect(() => {
    let remainingChangeList = new Map();
    let remainingAmount = state.remainingAmount;
    remainingChangeList.set(20, Math.floor(remainingAmount / 20))
    remainingAmount = remainingAmount%20;
    remainingChangeList.set(10, Math.floor(remainingAmount / 10))
    remainingAmount = remainingAmount%10;
    remainingChangeList.set(5, Math.floor(remainingAmount / 5))
    remainingAmount = remainingAmount%5;
    remainingChangeList.set(2, Math.floor(remainingAmount / 2))
    remainingAmount = remainingAmount%2;
    remainingChangeList.set(1, Math.floor(remainingAmount / 1))
    setRemainingAmount(remainingChangeList);

  }, [state.remainingAmount])


  const handleChange = (event) => {
    const amount = event.target.value;
    dispatch({ type: actions.userEnteredAmount, amount: amount });
  };



  return (
    <div><h3>Enter Money</h3>
      <InputLabel htmlFor="money-input">Amount</InputLabel>
      <OutlinedInput
        id="money-input"
        type="number"
        value={state.enteredAmount}
        onChange={(e) => handleChange(e)}
        startAdornment={<InputAdornment position="start">₹</InputAdornment>}
        label="Amount"
      />
      <div>
        <h3>Amount Remaining</h3>
        <h4>20*{remainingAmount.get(20)}</h4>
        <h4>10*{remainingAmount.get(10)}</h4>
        <h4>5*{remainingAmount.get(5)}</h4>
        <h4>2*{remainingAmount.get(2)}</h4>
        <h4>1*{remainingAmount.get(1)}</h4>
      </div>
    </div>

  )
}

