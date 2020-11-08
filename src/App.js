import React from 'react'
import ProductList from './components/product/ProductList'
import CartList from './components/cart/CartList'
import './App.css'

function App() {
  return (
    <div className='App'>
      <ProductList />
      <CartList />
    </div>
  )
}

export default App
