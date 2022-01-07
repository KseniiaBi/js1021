import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import cartIcon from'./cart.png';
import {books}  from "./books.js";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     data: books,
     cart: [],
     cartTotal: 0,
     cartCount: 0
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(name){
    const books = this.state.data.slice();
    let added;
    books.forEach(item => {
      if(item.name === name){
        added = item;
      }
    });

    let _cart = this.state.cart.slice();
    let wasInCart = false;
    _cart.forEach(item =>{
      if(item.name === name){
        item.count += 1;
        wasInCart = true;
      }
    });
    if(!wasInCart){
      _cart.push({...added, count: 1});
    }

    this.setState({
       data: books,
       cart: _cart,
       cartTotal: this.state.cartTotal + added.price,
       cartCount:this.state.cartCount +1
    });

  }

  render(){
    return (

    <>
    <header>
      <div className="logo">BookStore</div>
      <div className="cartInfo">
        <img className="cart" src={cartIcon} />
        <span>{this.state.cartCount} items in cart,</span>
        <span>{this.state.cartTotal} UAH</span>
      </div> 
    </header>
    <h1>Book store</h1>

    <div className="shop">
      {
        this.state.data.map((item,index) => <Book id={index} key={index} content={item} onBuy={this.addToCart}  />)
      }
    </div>
    </>
  )};
}


function Book(props){
  return(
    <div className="book">
      <img src={props.content.img} />
      <h2>{props.content.name}</h2>
      <div className="author">{props.content.author}</div>
      <div className="price">{props.content.price}</div>
      <button onClick={() => props.onBuy(props.content.name)}>Add to cart</button>
    </div>
   );
}


export default App;
