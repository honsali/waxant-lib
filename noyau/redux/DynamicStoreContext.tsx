import { createContext, useContext, useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import getStore, { registerReducer } from './StoreDynamique';

export interface IDynamicStoreContextProps {
    changerStore: any;
}

const DynamicStoreContext = createContext({} as IDynamicStoreContextProps);

export const DynamicStoreProvider = ({ children }) => {
    const [store, setStore] = useState(getStore());

    const changerStore = (reducerArray) => {
        registerReducer(reducerArray);
        setStore(getStore());
    };

    return (
        <DynamicStoreContext.Provider value={{ changerStore }}>
            <StoreProvider store={store}>{children}</StoreProvider>
        </DynamicStoreContext.Provider>
    );
};

const useDynamicStore = () => {
    const context = useContext(DynamicStoreContext);
    if (context === undefined) {
        throw new Error('useContextePage must be used within a ContextePage');
    }
    return context;
};

export default useDynamicStore;
