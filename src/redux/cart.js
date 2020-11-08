import {createSlice} from '@reduxjs/toolkit'
import { localService } from '../components/localStorage'

function CartItem (name, price) {
  return {
    name,
    price,
    quantity: 1
  }
}

const {reducer, actions} = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addCartItem: (state, {payload}) => {
      const { name, price } = payload
      const currentIndex = state.cart.findIndex(cartItem => cartItem.name === name)
      const nextCart = currentIndex < 0
        ? [...state.cart, new CartItem(name, price)]
        : [
          ...state.cart.slice(0, currentIndex),
          Object.assign(state.cart[currentIndex], {quantity: state.cart[currentIndex].quantity + 1}),
          ...state.cart.slice(currentIndex + 1)
        ]
      state.cart = nextCart
      localService.save(nextCart)
    },
    removeCartItem: (state, {payload}) => {
      const nextCart = [
        ...state.cart.slice(0, payload),
        ...state.cart.slice(payload + 1)
      ]
      state.cart = nextCart
      localService.save(nextCart)
    }
  }
})

export const {addCartItem, removeCartItem} = actions

export default reducer
