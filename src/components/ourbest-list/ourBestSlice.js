import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hooks';

const ourBestAdapter = createEntityAdapter();

const initialState = ourBestAdapter.getInitialState({
    ourBestLoadingStatus: 'idle'
});

export const fetchOurBest = createAsyncThunk(
    'ourBest/fetchOurBest',
    async() => {
        const {request} = useHttp();
        return await request("http://localhost:3001/ourBest");
    }
);

const ourBestSlice = createSlice({
    name: 'ourBest',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder
            .addCase(fetchOurBest.pending, state => {state.ourBestLoadingStatus = 'loading'})
            .addCase(fetchOurBest.fulfilled, (state, action) => {
                        state.ourBestLoadingStatus = 'idle';
                        ourBestAdapter.setAll(state, action.payload);
                    })
            .addCase(fetchOurBest.rejected, state => {
                        state.ourBestLoadingStatus = 'error';
                    })
            .addDefaultCase(() => {})
    }
})

const {reducer} = ourBestSlice;

export default reducer;

export const {selectAll} = ourBestAdapter.getSelectors(state => state.ourBest);
