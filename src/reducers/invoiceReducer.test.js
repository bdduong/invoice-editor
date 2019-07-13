import { invoiceReducer } from './invoiceReducer';
import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from '../actions/invoiceAction';

const initialState = {
  items: {},
  subtotal: 0,
  tax: 0,
  total: 0,
  id: 0
}

let state;
beforeEach(() => { 
  state = {
    items: { 1: {id: 1, name: 'Chips', qty: 0, price: 0, total: 0}},
    subtotal: 0,
    tax: 0,
    total: 0,
    id: 0
  }
})

describe('Invoice reducer test', () => { 
  it('should return default state if wrong type', () => { 
    expect(invoiceReducer(initialState, {type: 'BOGUS'})).toEqual(initialState)
  })

  it('should add an item', () => { 
    const item = {
      id: 2,
      name: 'Sandwich',
      qty: 2,
      price: 4,
      total: 8 
    }
    const expectedState = {
      id: 2,
      items: {
        2: item,
      },
      subtotal: 0,
      tax: 0,
      total: 0
    }
    const action = { type: ADD_ITEM, payload: item };
    expect(invoiceReducer(initialState, action)).toEqual(expectedState);
  })

  it('should delete an item', () => { 
    const expectedState = {
      id: 0,
      items: {},
      subtotal: '0.00',
      tax: '0.00',
      total: '0.00'
    }
    const action = { type: DELETE_ITEM, payload: 1 };
    expect(invoiceReducer(state, action)).toEqual(expectedState);
  })

  it('should update an item', () => { 
    const item = {
      id: 1,
      name: 'Candy',
      qty: 2,
      price: 4,
      total: 8
    }
    const expectedState = {
      items: { 1: { id: 1, name: 'Candy', qty: 2, price: 4, total: 8 } },
      subtotal: '8.00',
      tax: '0.40',
      total: '8.40',
      id: 0
    }
    const action = { type: UPDATE_ITEM, payload: item };
    expect(invoiceReducer(state, action)).toEqual(expectedState);
  })
})