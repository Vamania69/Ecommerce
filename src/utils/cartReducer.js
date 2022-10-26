export const CartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state)
            console.log(action.payload)
            return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
        case "REMOVE_FROM_CART":
            console.log(action.payload)
            return { ...state, cart: state.cart.filter(c => c.props.id !== action.payload.props.id) }
        default:
            console.log('add to cart')
            return state;
    }
}