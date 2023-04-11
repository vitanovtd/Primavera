import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    meals: [],
};


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {

            const meal = state.meals.find(meal => meal.id === action.payload.id);

            if (meal) {
                meal.quantity += action.payload.quantity;
            } else {
                state.meals.push(action.payload);
            }
        },
        removeMeal: (state, action) => {
            state.meals = state.meals.filter(meal => meal.id !== action.payload);
        },
        resetCart: (state) => {
            state.meals = []
        }
    }
});

export const { addToCart, removeMeal, resetCart } = cartSlice.actions;

export default cartSlice.reducer;