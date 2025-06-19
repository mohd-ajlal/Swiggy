import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
// import userReducer from './userSlice';


const appStore = configureStore({
    reducer:{
        // Add your slices here
        // Example: cart: cartReducer
        cart: cartReducer,
        // user: userReducer
    }
})

export default appStore;