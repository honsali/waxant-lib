import { ReactNode, createContext, useContext } from 'react';

export interface IContexteBoutonProps {
    type?: string;
    forme?: string;
}

const ContexteBouton = createContext<IContexteBoutonProps | undefined>(undefined);

interface ContexteBoutonProviderProps {
    type?: string;
    forme?: string;
    children: ReactNode;
}

export const ContexteBoutonProvider: React.FC<ContexteBoutonProviderProps> = ({ type, forme, children }) => {
    return <ContexteBouton.Provider value={{ type, forme }}>{children}</ContexteBouton.Provider>;
};

const useContexteBouton = () => {
    const context = useContext(ContexteBouton);
    if (context === undefined) {
        return { type: 'normal' };
    }
    return context;
};

export default useContexteBouton;
