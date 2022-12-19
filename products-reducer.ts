import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { setAppError, setAppStatus } from '../../app';

import { productsPageAPI } from './api-productsPage';

export const initialState = {
    products: [] as Array<ProductType>,
};

export const getProducts = createAsyncThunk(
    'productsPage/setProducts',
    async (param: {}, { dispatch, rejectWithValue }) => {
        dispatch(setAppStatus({ appStatus: 'loading' }));
        try {
            const response = await productsPageAPI.getProducts();

            return { products: response.data };
        } catch (error: any) {
            dispatch(setAppError({ appError: 'Some error occurred' }));

            return rejectWithValue(null);
        } finally {
            dispatch(setAppStatus({ appStatus: 'idle' }));
        }
    },
);

const slice = createSlice({
    name: 'productsPage',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.products;
        });
    },
});

export const productsReducer = slice.reducer;

export type ProductType = {
    productId: string;
    imgSrc: string;
    productName: string;
    productDescription: string;
    pricePerUnit: number;
};
