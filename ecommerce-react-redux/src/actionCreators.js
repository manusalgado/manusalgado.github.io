import axios from 'axios'

const loadProducts = () => {
    return dispatch => {
        return axios.get('http://localhost:3002/products')
        .then(response => {
            dispatch({
                type: 'REPLACE_PRODUCTS',
                products: response.data
            })
        })
    }
}

const addToCart = product => {
    return {
        type: 'ADD_TO_CART',
        product: product
    }
}

const deleteProduct = product => {
    return {
        type: 'DELETE_PRODUCT',
        product: product
    }
}

export {addToCart, deleteProduct, loadProducts}