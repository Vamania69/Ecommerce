export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            console.log(action.payload.title)
            return { ...state, cart: state.cart.filter(c => c.title !== action.payload.title) }
        default:
            console.log('add to cart')
            return state;
    }
}