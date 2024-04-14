import { createContext, useContext, useState } from 'react';

export interface IContextePageProps {
    carte: any;
    changerCarte: any;
}

const ContextePage = createContext({} as IContextePageProps);

export const ContextePageProvider = ({ children }) => {
    const [carte, setCarte] = useState();

    const changerCarte = (m) => {
        setCarte(m);
    };

    return <ContextePage.Provider value={{ carte, changerCarte }}>{children}</ContextePage.Provider>;
};

const useContextePage = () => {
    const context = useContext(ContextePage);
    if (context === undefined) {
        throw new Error('useContextePage must be used within a ContextePage');
    }
    return context;
};

export default useContextePage;
