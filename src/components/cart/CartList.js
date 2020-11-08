import React from 'react'
import { connect } from 'react-redux'
import { removeCartItem } from '../../redux/cart'
import CartItem from './Carttem'
import './CartList.css'

function CartList (props) {
  const { cart, removeCartItem } = props
  const _removeFromCart = (index) => {
    removeCartItem(index)
  }
  const _renderCartView = () => {
    if (cart && cart.length) {
      const total = cart.reduce(function (acc, obj) { return acc + obj.price * obj.quantity }, 0)
      return (
        <ul className='section-list-rows'>
          <li className='row-columnCaptions row CartList-columnCaption'>
            <span className='rowItem'>Name</span>
            <span className='rowItem center'>Price</span>
            <span className='rowItem center'>Quantity</span>
            <span className='rowItem btn-columnCaption' />
          </li>
          {
            cart.map((cartItem, index) => (
              <CartItem
                key={index}
                item={cartItem}
                onRemove={() => _removeFromCart(index)}
              />
            ))
          }
          <li className='row-totals row'>
            <span className='itemName rowItem'>{`Total: ${total.toFixed(2)}`}</span>
            <span className='rowItem' />
          </li>
        </ul>
      )
    }
    return (
      <div className='CartList-noItemsContainer'>
        <div className='CartList-noItemsImg' />
        <h5 className='CartList-noItemsText'>No items in your cart</h5>
      </div>
    )
  }
  return (
    <div className='CartList section-list'>
      <h2 className='section-title'>Cart</h2>
      {_renderCartView()}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart
})

const mapDispatchToProps = {removeCartItem}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
