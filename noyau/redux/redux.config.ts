import { AnyAction, combineReducers, configureStore, Reducer, ThunkAction } from '@reduxjs/toolkit';
import MdlAuth from '../auth/MdlAuth';
import MdlMessage from '../message/MdlMessage';
import waxantMiddleWare from './waxantMiddleWare';

const staticReducers = {
    mdlAuth: MdlAuth,
    mdlMessage: MdlMessage,
};

const store = configureStore({
    reducer: staticReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(waxantMiddleWare),
});

const getStore = (mapReducer: Record<string, Reducer>) => {
    store.replaceReducer(
        combineReducers({
            ...staticReducers,
            ...mapReducer,
        })
    );
    return store;
};

export type IRootState = ReturnType<any>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IRootState, unknown, AnyAction>;

export default getStore;
