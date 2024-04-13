import { Reducer } from '@reduxjs/toolkit';
import React, { createContext, useContext } from 'react';

export type MapDomaineType = {
    menu?: React.ComponentType;
    routes?: React.ReactNode[];
};

export interface ConfigAppType {
    appName: string;
    locale: string;
    formatDate: string;
    apiTimeout: number;
    keycloakConfig: { url: string; realm: string; clientId: string };
    theme: Record<string, any>;
    mapDroitAcces: Record<string, string[]>;
    mapRole: Record<string, string>;
    mapActionCtrl: Record<string, string>;
    mapActionUI: Record<string, string>;
    mapLibelle: Record<string, string>;
    mapTitre: Record<string, string>;
    mapErreur: Record<string, string>;
    mapMessage: Record<string, string>;
    mapDomaine: Record<string, MapDomaineType>;
    mapReducer: Record<string, Reducer>;
    listerReference: (params: any) => Promise<any>;
}

export const ContexteApp = createContext<ConfigAppType | undefined>(undefined);

const useContexteApp = () => {
    const context = useContext(ContexteApp);
    if (context === undefined) {
        throw new Error('Waxant needs to be configured');
    }
    return context;
};

export default useContexteApp;
