import React from 'react'
import './CartItem.css'

function CartItem (props) {
  const { item, onRemove } = props
  const { name, price, quantity } = item
  return (
    <li className='CartItem row'>
      <span className='itemName rowItem'>{name}</span>
      <span className='itemPrice rowItem'>{price.toFixed(2)}</span>
      <span className='itemQuantity rowItem'>{quantity}</span>
      <button className='btn rowItem' onClick={onRemove}>Remove</button>
    </li>
  )
}

export default CartItem
