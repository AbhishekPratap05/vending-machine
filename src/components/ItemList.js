import Button from "@mui/material/Button";
import { actions } from './vendingReducer';
import { useVendingContext } from './vendingContext';

export default function ItemList() {
  const {state,dispatch} = useVendingContext();

  const buyProduct = (itemName,itemPrice)=>{
    if(itemPrice > state.enteredAmount){
      alert(`Can not buy ${itemName} as price is more than entered`)
      return
    }
    dispatch({type:actions.userBought,details:{itemName,itemPrice}})
    alert(`Bought ${itemName} of ₹ ${itemPrice}`) 
  }
  return (
    <>
    {
      state.items.map((item,i)=>{
        return <Button 
        className='vending-items' 
        variant="contained" 
        color={(item.price<=state.enteredAmount && item.qty>0) ? "success" : "error"} 
        key={i}
        onClick={()=>buyProduct(item.product,item.price)}
        >
          <div>
            <h4>{item.product}</h4><hr></hr><span>Pice: ₹ {item.price}</span><br></br><span>Qty:{item.qty}</span>
          </div>
        </Button>
      })
    }
    </>
  )
}
