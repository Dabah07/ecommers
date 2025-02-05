const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    products: []
}
export const cartSlice =  createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            state.products.push(action.payload)
        },
        removeCart(state, action) {
            state.products = state.products.filter(product => product.id != action.payload)
        },
        emptyCart(state) {
            state.products = []
        }
    }
})
export const { addCart, removeCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer