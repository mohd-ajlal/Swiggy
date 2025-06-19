import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state, action)=>{
            state.items.pop()
        },
        resetCart:(state, action)=>{
            state.items = []
        }  
    }
})


export const { addItem, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;























// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         items:[]
//     },
//     reducers:{
//         addItem:(state, action)=>{},

//     }
// })

// export const {addItem} = cartSlice.actions;
// export default cartSlice.reducer