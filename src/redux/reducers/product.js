import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../utils/axios";


export const getProduct = createAsyncThunk(
    'product/getProduct',
    async (_, {rejectWithValue}) => {
        try {
            const rec = await axios(`${instance}/products`)
            return rec.data
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

const productSlice = createSlice({
    name: "product",
    initialState: {
        data: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state, {payload}) => {
            state.isLoading = true
        })
        builder.addCase(getProduct.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        })
        builder.addCase(getProduct.rejected, (state, {payload}) => {
            state.isLoading = false
        })
    }
})

export default productSlice.reducer