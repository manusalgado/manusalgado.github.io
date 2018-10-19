import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import {addToCart} from '../actionCreators'
import {connect} from 'react-redux'

const ProductList = ({addToCart, products}) => {
       
    return (
      <div className="col s12 m10">
            <div className="row">
                { products.map( product => (
                <div className="col s12 m4 l4" key={ product.id }>
                    <p>Categoria: { product.category }</p>
                    <p>{ product.name }</p>
                    <img src={ product.image } alt={ product.name } width="150" height="150" />
                    <p>${ product.price }</p>
                    <button className="btn" onClick={ () => addToCart(product) }>Agregar al carrito</button>
                </div>
                )) }
            </div>
      </div>
    )
  }

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart (product) {
            dispatch(addToCart(product))
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)