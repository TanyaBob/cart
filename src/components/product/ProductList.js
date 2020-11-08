import React from 'react'
import {connect} from 'react-redux'
import ProductItem from './ProductItem'
import {addCartItem} from '../../redux/cart'
import './ProductList.css'

function ProductList (props) {
  const { addCartItem } = props
  const products = [
    {
      name: 'Sledgehammer',
      price: 125.75
    },
    {
      name: 'Axe',
      price: 190.50
    },
    {
      name: 'Bandsaw',
      price: 562.13
    }, {
      name: 'Chisel',
      price: 12.9
    },
    {
      name: 'Hacksaw',
      price: 18.45
    }
  ]
  const _addToCart = (payload) => {
    addCartItem(payload)
  }

  return (
    <div className='ProductList section-list'>
      <h2 className='section-title'>Products</h2>
      <ul className='section-list-rows'>
        <li className='row-columnCaptions row'>
          <span className='rowItem'>Name</span>
          <span className='rowItem center'>Price</span>
          <span className='rowItem btn-columnCaption' />
        </li>
        {
          products.map((product, index) =>
            <ProductItem
              key={index}
              item={product}
              onAdd={_addToCart}
            />)
        }
      </ul>
    </div>
  )
}

const mapDispatchToProps = {addCartItem}

export default connect(null, mapDispatchToProps)(ProductList)
