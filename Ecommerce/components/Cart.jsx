import { useId } from "react"
import {CartIcon, ClearCartIcon, RemoveFromCartIcon} from "./icons.jsx"
import { useCart } from "../src/hooks/useCart.js"

export function Cart () {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart} = useCart()


    function cartItem ({ thumbnail, price, title, quantity, addToCart }){
        return (
            <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
        )
    } 




    return (
        <>
         <label className="cart-button" htmlFor="cart">
         <CartIcon />
         </label>
         <input id={cartCheckBoxId} type="checkbox" hidden />

         <aside className="cart">
            <ul>
             {cart.map(product =>( 
                <cartItem key={product.id}
                addToCart = {() => addToCart(product)}
                {...product} />
             ))}
             
            </ul>
            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
         </aside>
        </>
    )
}