import React, { Component } from 'react'
import styled from 'styled-components'
import ShopingCart from './components/ShoppingCart'
import ProductList from './components/ProductList'

const mgTop = {
  marginTop: '70px'
}
const NavBar = styled.div`
  height: 50px;
  background-color: darkgreen;
  width: 100%;
  position: fixed;
  top: 0;
  h2 {
    color: #fff;
    padding: 10px;
    margin: 0;
    font-size: 2rem;
  }
`
class App extends Component {

  render() {
    return (
      <div>
        <NavBar className="z-depth-2">
          <a href="#">
            <h2>Tienda Tamuel</h2>
          </a>
        </NavBar>
        <section className="container" style={mgTop}>
          <div className="row">
            <ProductList />
            <ShopingCart />
          </div>
        </section>
      </div>
    );
  }
}

export default App
