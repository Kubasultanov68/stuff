import {createSlice} from "@reduxjs/toolkit";
import favorites from "../../pages/Favorites/Favorites";


const userSlice = createSlice({
    name: "user",
    initialState: {
        email: '',
        avatar: '',
        name: '',
        cart: [],
        favorite: []
    },
    reducers: {
        loginUser: (state, {payload}) => {
            state.name = payload
        },
        logOutUser: (state, {payload}) => {
            state.user = {
                email: '',
                avatar: '',
                name: '',
                password: ''
            }
        },
        addFavorite: (state, {payload}) => {
            state.favorite.find((item) => item.id === payload.id) ?
                alert('такой товар в избранном уже есть!') :
                state.favorite = [...state.favorite, payload]
        },
        addCart: (state, {payload}) => {
            state.cart.find((item) => item.id === payload.id) ?
                state.cart = state.cart.map((item) => item.id === payload.id ? {...payload, count: item.count + 1} : item) :
                state.cart = [...state.cart, {...payload, count: 1}]
        },
        deleteCart: (state, {payload}) => {
            state.cart = state.cart.filter((item) => item.id !== payload.id)
        },
        addCount: (state, { payload }) => {
            const item = state.cart.find((item) => item.id === payload.id);
            if (item) {
                item.count += 1;
            }
        },
        deleteCount: (state, {payload}) => {
            const item = state.cart.find((item) => item.id === payload.id);
            if (item) {
                item.count = item.count !== 1 ? item.count - 1 : 1;
            }
        },
    }
})

export const {
    loginUser,
    logOutUser,
    addCart,
    deleteCart,
    addCount,
    deleteCount,
    addFavorite,
} = userSlice.actions
export default userSlice.reducer