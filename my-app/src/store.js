import { createStore } from 'redux';
import {database} from './database.js';

function reducer(state = [], action){
	switch(action.type){
		case 'ADD_TO_CART': 
				let added;
				database.forEach(item => {
					if(item.name == action.name){
						added = item;
					}
				});
				let cartCopy = state.cart.slice();
				let wasInCart = false;
				cartCopy.forEach(item => {
					if(item.name == action.name){
						wasInCart = true;
						item.count += 1;
					}
				});
				if(!wasInCart){
					cartCopy.push({...added, count: 1});
				}

				return {
					cart: cartCopy,
					cartCount: state.cartCount +1,
					cartTotal: state.cartTotal + added.price
				};

				break;
	
		case 'INCREMENT': 
				let cartCop = state.cart.slice();
				let newTotal = state.cartTotal;
				cartCop.forEach(item => {
					if(item.name == action.name){
						item.count += 1;
						newTotal += item.price
					}
				});

				return {
					cart: cartCop,
					cartCount: state.cartCount +1,
					cartTotal: newTotal
				};
				break;

		case 'DECREMENT': 

				let cartC = state.cart.slice();
				let total = state.cartTotal;
				cartC.forEach(item => {
					if(item.name == action.name && item.count > 1){
						item.count -= 1;
						total -= item.price
					}
					else if(item.name == action.name && item.count == 1){
						store.dispatch({type: 'DELETE_FROM_CART', name: item.name})
					}
				});

				return {
					cart: cartC,
					cartCount: state.cartCount -1,
					cartTotal: total
				};

				break;

			case 'DELETE_FROM_CART': 

			let cartcopy = state.cart.slice();
			let itemCount;
			let itemTotal;
				cartcopy.forEach((item,index) => {
					itemCount = item.count;
					itemTotal = item.price * itemCount;
					cartcopy.splice(index, 1);
				});

				return {
					cart: cartcopy,
					cartCount: state.cartCount - itemCount,
					cartTotal: state.cartTotal - itemTotal
				};
				break;

		default: return state;
	}
}

let baseStore = {
	cart: [],
	cartTotal: 0,
	cartCount: 0
}

const store = createStore(reducer, baseStore);

export default store;
