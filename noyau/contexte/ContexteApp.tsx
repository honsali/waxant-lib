import { createContext, useContext } from 'react';
import { ModuleDefinition } from '../routes/ModuleDefinition';

export type MapDomaineType = {
    listeModule?: ModuleDefinition[];
};

export interface ConfigAppType {
    appName: string;
    langue: string;
    formatDate: string;
    formatDateTime: string;
    apiTimeout: number;
    keycloakConfig: { url: string; realm: string; clientId: string };
    theme: Record<string, any>;
    mapDroitAcces: Record<string, string[]>;
    mapRole: Record<string, string>;
    mapDomaine: Record<string, MapDomaineType>;
    listerReference: (params: any) => Promise<any>;
}

export const ContexteApp = createContext<ConfigAppType | undefined>(undefined);

export const ContexteAppProvider = ({ config, children }) => {
    return <ContexteApp.Provider value={config}>{children}</ContexteApp.Provider>;
};

const useContexteApp = () => {
    const context = useContext(ContexteApp);
    if (context === undefined) {
        throw new Error('Waxant needs to be configured');
    }
    return context;
};

export default useContexteApp;
