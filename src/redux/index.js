import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit'
import { localService } from '../components/localStorage'

import cart from './cart'

const appReducer = combineReducers({
  cart
})

const reducer = (state, action) => appReducer(state, action)
const cartInitState = localService.load([])

export default configureStore({
  reducer,
  preloadedState: {
    cart: {
      cart: cartInitState
    }
  }
})
