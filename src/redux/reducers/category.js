import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../../utils/axios";
import {getProduct} from "./product";


export const getCategory = createAsyncThunk(
    'category',
    async (_, {rejectWithValue}) => {
        try {
            const rec = await axios(`${instance}/categories`)
            return rec.data
        }
        catch (err) {
            return rejectWithValue(err)
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: {
        data: [],
        isLoading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state, {payload}) => {
            state.isLoading = true
        })
        builder.addCase(getCategory.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        })
        builder.addCase(getCategory.rejected, (state, {payload}) => {
            state.isLoading = false
        })
    }
})

export default categorySlice.reducer