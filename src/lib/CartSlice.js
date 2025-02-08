import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addCart(state, action) {
            const index = state.products.findIndex(item => item.product.id == action.payload.id)
            if (index != -1) {
                state.products[index].quantity++;
            }
            else {
                state.products.push({
                    product: action.payload,
                    quantity: 1
                })
            }
            updateLocalStorage(state.products)
        },
        removeCart(state, action) {
            if (state.products[action.payload].quantity > 1) {
                state.products[action.payload].quantity--;
            } else {
                state.products.splice(action.payload, 1);
            }
            updateLocalStorage(state.products);
        },
        emptyCart(state) {
            state.products = [];
            updateLocalStorage(state.products);
        },
        setmycrt(state, action) {
            state.products = action.payload;
        }
    }
});

const updateLocalStorage = (mycrt) => {
    localStorage.removeItem('mycrt');
    localStorage.setItem('mycrt', JSON.stringify(mycrt));
};

export const { addCart, removeCart, emptyCart, setmycrt } = cartSlice.actions;
export default cartSlice.reducer;