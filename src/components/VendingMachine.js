import React, { useReducer } from 'react'
import './component.css'
import { initialValues } from './vendingReducer.js';
import MoneySlot from './MoneySlot';
import { vendingReducer } from './vendingReducer.js';
import ItemList from './ItemList';
import VendingContext from './vendingContext';

export default function VendingMachine() {
    
    const [state, dispatch] = useReducer(vendingReducer,initialValues)
    const storeDetails = {
        state,
        dispatch
    }

    return (
        <VendingContext.Provider value={storeDetails}>
            <div className='vending-container'>
                <div>
                    <h2>Vending Machine 🛒</h2>
                    <div className='container-item'>
                        <ItemList/>
                    </div>
                </div>
                <div className='container-money-slot'>
                    <MoneySlot />
                </div>
            </div>
        </VendingContext.Provider>
    )
}
