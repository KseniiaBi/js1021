import './App.css';
import React from 'react';
import {database} from './database.js';
import store from './store';
// router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Link } from "react-router-dom";

import { connect } from 'react-redux';



function App(props){
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo">SuperAPP</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/cart">Cart</Link>
          </nav>
          <div className="cart_info">
            {props.cartCount} items, 
            {props.cartTotal} UAH
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home text='SuperApp Homepage' />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>

        <footer> &copy; JS 10.2021 </footer>
      </div>
    );
  }

const mapStateToProps = function(state) {
  return {
    cart: state.cart,
    cartTotal: state.cartTotal,
    cartCount: state.cartCount
  };
}



function Home(props){
  return(
    <>
    <h1>Welcome to {props.text} </h1>
    <div className="shop">
    {
      database.map((item,index) => <Pizza key={index} data={item} />)
    }
    </div>
    </>

  );
}

function Pizza(props){
  return(
    <div className="pizza">
      <img src={props.data.img} />
      <h2>{props.data.name}</h2>
      <div className="price">{props.data.price} UAH</div>
      <button onClick={()=> store.dispatch({type: 'ADD_TO_CART', name: props.data.name})}>Add to cart</button>
    </div>
  );
}

function ItemInCart(props){
  return(
    <div className="item_in_cart">
      <img src={props.item.img} />
      <h2>{props.item.name}</h2>
      <button onClick={() => store.dispatch({type: 'DECREMENT', name: props.item.name})}>-</button>
      <span>{props.item.count}</span>
      <button onClick={() => store.dispatch({type: 'INCREMENT',name: props.item.name})}>+</button>
      <div className="price total">{props.item.price * props.item.count} UAH</div>
      <button onClick={() => store.dispatch({type: 'DELETE_FROM_CART',name: props.item.name})}>x</button>
    </div>
  );
}

function Contact(props){
  return(
    <h1>Some longread about us  </h1>
  );
}
function Cart(props){
  return(
    <>
    <h1>Cart </h1>
    {
      store.getState().cart.map((item,index) => <ItemInCart key={index} item={item} />)
    }
    </>
  );
}

export default connect(mapStateToProps)(App);
