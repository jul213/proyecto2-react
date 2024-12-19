import {useFilters} from "../src/hooks/useFilters.js"
import { useCart } from "../src/hooks/useCart.js"
export function Footer() {
    const {filters} = useFilters()
    const {cart} = useCart()
    return ( 
    <footer className="footer">
        {
            JSON.stringify(filters, null, 2)
        }
        {
            JSON.stringify(cart, null, 2)
        }
    </footer>
    )
}