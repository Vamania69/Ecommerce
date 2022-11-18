import React, { useReducer } from "react";
import { CartReducer } from "./cartReducer";
import { products } from "./productData";



export const WishlistContext = React.createContext()

const WishlistContext1 = ({ children }) => {


    const [state, dispatch] = useReducer(CartReducer,
        { productData: products, cart: [] }
    )

    return (
        <WishlistContext.Provider value={{ WishlistCount: state, WishlistDispatch: dispatch }}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishlistContext1