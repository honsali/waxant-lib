import { AnyAction, combineReducers, configureStore, Reducer, Store, ThunkAction } from '@reduxjs/toolkit';
import MdlAuth from '../auth/MdlAuth';
import MdlI18n from '../i18n/MdlI18n';
import MdlMessage from '../message/MdlMessage';
import waxantMiddleWare from './waxantMiddleWare';

interface ReducerMap {
    [key: string]: Reducer;
}

let staticReducers: ReducerMap = {
    mdlAuth: MdlAuth,
    mdlMessage: MdlMessage,
    mdlI18n: MdlI18n,
};

const store = configureStore({
    reducer: combineReducers(staticReducers),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(waxantMiddleWare),
});

const getStore = () => {
    return store;
};

export const registerReducer = (newReducers: ReducerMap): Store<any> => {
    staticReducers = { ...staticReducers, ...newReducers };
    store.replaceReducer(combineReducers(staticReducers));
    return store;
};

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IRootState, unknown, AnyAction>;

export default getStore;
