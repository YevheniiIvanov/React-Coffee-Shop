import { configureStore } from '@reduxjs/toolkit';
import ourBest from '../components/ourbest-list/ourBestSlice';
import coffee from '../components/coffee-list/coffeeSlice';

const stringMidleWare = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })
    }
    return next(action)
}

const store = configureStore({
    reducer: {ourBest, coffee},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMidleWare),
    devTools: process.env.NODE_ENV !== 'production',
    
})             

export default store;