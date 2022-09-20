import { ItemDetail } from '../ItemsDetails';

export const actions = {
  userBought: 'USER_BOUGHT',
  userEnteredAmount: 'USER_ENTERED_AMOUNT'
}

export const initialValues = {
  items: ItemDetail,
  enteredAmount: 0,
  remainingAmount:0
}

export function vendingReducer(state, action) {
  switch (action.type) {
    case actions.userBought:
      return {
        ...state,
        enteredAmount:0,
        remainingAmount:state.enteredAmount - action.details.itemPrice,
        items: state.items.map((item) => {
          if (item.product === action.details.itemName) {
            item.qty = item.qty - 1
          }
          return item;
        })
      };
    case actions.userEnteredAmount:
      return {
        ...state,
        enteredAmount: action.amount,
        remainingAmount:0
      };
    default:
      return state;
  }
}

 