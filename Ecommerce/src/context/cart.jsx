import { createContext, useReducer, useState } from "react";
import { cartReducer, cartInitialState } from "../reducer/cart.js";
export const CartContext = createContext()




export function  CartProvider ({ children }) {
   const [state, dispatch] = useReducer(cartReducer, cartInitialState)


   const addToCart = product => dispatch({
        type: "ADD_TO_CART",
        payload: product
   })

   const removeFromCart = product => dispatch({
     type: "REMOVE_FROM_CART",
     payload: product
   })

   const clearCart = product => dispatch({
    type: "CLEAR_CART",
    payload: product
   }
   )

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
           {children} 
            </CartContext.Provider>
    )
}