import React from 'react'
import Button from "@mui/material/Button";
export default function ItemList({items}) {
  console.log(items)
  return (
    <>
    {
      items.map((item,i)=>{
        console.log(item);
        return <Button className='vending-items' variant="contained" color="success" key={i}>{item.product}</Button>
      })
    }
    </>
  )
}
