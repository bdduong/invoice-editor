import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/invoiceAction';
import { generateTotals } from '../helpers'

const initialState = {
  items: {},
  subtotal: 0,
  tax: 0,
  total: 0,
  id: 0
}

export const invoiceReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_ITEM: { 
      const id = action.payload.id
      return { ...state, items: Object.assign({}, state.items, { [id]: action.payload }), id };
    }
    case DELETE_ITEM: {
      const updatedItems = Object.assign({}, state.items);
      delete updatedItems[action.payload];
      const invoiceTotals = generateTotals(updatedItems);
      return { ...state, items: updatedItems, ...invoiceTotals }
    }
    case UPDATE_ITEM: {
      const updateIndex = action.payload.id;
      const updatedItems = Object.assign({}, state.items)
      updatedItems[updateIndex] = action.payload;
      const invoiceTotals = generateTotals(updatedItems);
      return { ...state, items: updatedItems, ...invoiceTotals }
    }
    default:
      return state;
  }
}