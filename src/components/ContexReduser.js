import React, { createContext, useContext, useReducer } from 'react';

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      const existingIndex = state.findIndex(
        item => item.id === action.id && item.size === action.size
      );
      
      if (existingIndex >= 0) {
        const newState = [...state];
        newState[existingIndex].qty += action.qty;
        return newState;
      }
      
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          qty: action.qty,
          size: action.size,
          img: action.img
        }
      ];
      
    case 'REMOVE':
      return state.filter((_, index) => index !== action.index);
    case 'CLEAR_CART':
      return [];
     case "UPDATE":
  return state.map(food => {
    if (food.id === action.id && food.size === action.size) {
      return {
        ...food,
        qty: food.qty + action.qty,
        price: action.price
      };
    }
    return food;
  });
  case "DROP":
    let empArray = []
    return empArray
  default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCart = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);