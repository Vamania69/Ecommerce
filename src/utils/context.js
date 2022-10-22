import React, { useReducer } from "react";
import { CartReducer } from "./cartReducer";
import { products } from "./productData";



export const CountContext = React.createContext()

function Context() {


  const [state, dispatch] = useReducer(CartReducer,
    { productData: products, cart: [] }
  )

  return (

    <CountContext.Provider value={{ countState: state, countDispatch: dispatch }}>
    </CountContext.Provider>
  )
}

export default Context