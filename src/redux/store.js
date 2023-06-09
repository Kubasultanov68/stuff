import {configureStore} from '@reduxjs/toolkit'

import productSlice from './reducers/product'
import categorySlice from './reducers/category'
import userSlice from './reducers/user'
import {apiSlice} from "./reducers/api";

export const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categorySlice,
        user: userSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})