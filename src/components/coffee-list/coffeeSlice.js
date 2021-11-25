import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hooks';

const initialState = {
    coffee: [],
    coffeeLoadingStatus: 'idle',
    activeFilter: 'All',
    coffeeFilter: [],
    term: ''
};

export const fetchCoffee = createAsyncThunk(
    'coffee/fetchCoffee',
    async() => {
        const {request} = useHttp();
        return await request("http://localhost:3001/coffee")
    }
);

const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        coffeefilterChanged: (state, action) => {
            state.activeFilter = action.payload; 
            state.coffeeFilter = action.payload ==="All" ? state.coffee : state.coffee.filter(item => item.country === state.activeFilter);
        },
        coffeeSearchTerm: (state, action) => {
            state.term = action.payload;
            state.coffeeFilter = state.coffeeFilter.filter(item => {return item.name.indexOf(state.term) > -1})
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchCoffee.pending, state => {state.coffeeLoadingStatus = 'loading'})
            .addCase(fetchCoffee.fulfilled, (state, action) => {
                        state.coffeeLoadingStatus = 'idle';
                        state.coffee = action.payload;
                        state.coffeeFilter = action.payload;
                    })
            .addCase(fetchCoffee.rejected, state => {
                        state.coffeeLoadingStatus = 'error';
                    })
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = coffeeSlice;

export default reducer;

export const { coffeefilterChanged, coffeeSearchTerm, coffeeSetState, coffeeFilter } = actions;