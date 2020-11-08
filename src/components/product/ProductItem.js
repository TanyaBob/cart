import React from 'react'
import './ProductItem.css'

function ProductItem (props) {
  const {
    item,
    onAdd
  } = props
  const { name, price } = item

  return (
    <li className='ProductItem row'>
      <span className='itemName rowItem'>{name}</span>
      <span className='itemPrice rowItem'>{price.toFixed(2)}</span>
      <button className='btn rowItem' onClick={() => onAdd(item)}>Add</button>
    </li>
  )
}

export default ProductItem
