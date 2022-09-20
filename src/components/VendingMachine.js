import React, { useState } from 'react'
import { ItemDetail } from '../ItemsDetails'
import ItemList from './ItemList';
import './component.css'
import MoneySlot from './MoneySlot';

export default function VendingMachine() {
    const [item, setItem] = useState(ItemDetail);


    return (
        <>
            <div className='vending-container'>
                <div>
                    <h2>Vending Machine 🛒</h2>
                    <div className='container-item'>
                        <ItemList items={item} />
                    </div>
                </div>
                <div className='container-money-slot'>
                    <MoneySlot />
                </div>
            </div>
        </>
    )
}
