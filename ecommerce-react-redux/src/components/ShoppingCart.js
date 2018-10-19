import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {deleteProduct} from '../actionCreators'
import {connect} from 'react-redux'
import styled from 'styled-components'


const Cart = styled.div`
        position: fixed;
        right: 47px;
        background-color: darkgreen;
        z-index: 5;
        border-radius: 3px;
        padding: 10px;
        color: #fff;
`
const ShoppingCart = ({deleteProduct, cart}) => {
    return (
      <div className="col s12 m2">
      <Cart>
            <h4>Tus productos</h4>
            { cart.map(product => (
                <div>
                    <ul key={ product.id }>
                        <li>{ product.category }</li>
                        <li>{ product.name }</li>
                    </ul>
                    <a href="#">
                        <i className="material-icons" onClick={() => deleteProduct(product)} >delete</i>
                    </a>
                </div>
            )) }
            <div>
                <span>${ cart.reduce((sum, product) => sum + product.price, 0) }</span>
            </div>
      </Cart>
      </div>
    )
  }

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProduct(product) {
            dispatch(deleteProduct(product))
          }
    }  
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)