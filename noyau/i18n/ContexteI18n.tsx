import _ from 'lodash';
import { createContext, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectRole } from '../auth/MdlAuth';
import { ConfigAppType } from '../contexte/ContexteApp';
import useAppDispatch from '../redux/useAppDispatch';
import { ModuleDefinition } from '../routes/ModuleDefinition';
import { MdlI18n } from './MdlI18n';

export interface IContexteI18nProps {
    config: ConfigAppType;
}

const ContexteI18n = createContext<IContexteI18nProps | undefined>(undefined);

interface ContexteI18nProviderProps {
    config: ConfigAppType;
    children: React.ReactNode;
}

export const ContexteI18nProvider: React.FC<ContexteI18nProviderProps> = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    const role = useSelector(selectRole);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (role) {
            const domaine = config.mapDomaine[role];
            const listeModule = domaine?.listeModule;
            const sum = _.reduce(
                listeModule,
                (acc, module) => {
                    const moduleI18N = mergeI18N(module);
                    return { ...acc, ...moduleI18N };
                },
                {}
            );

            dispatch(MdlI18n.etendreLibelle(sum));
        }
    }, [role, config]);

    return <ContexteI18n.Provider value={{ config }}>{children}</ContexteI18n.Provider>;
};

const mergeI18N = (module: ModuleDefinition) => {
    let result = { ...module.mapI18N };

    if (module.listeSousModule?.length) {
        for (const sousModule of module.listeSousModule) {
            const sousModuleI18N = mergeI18N(sousModule);
            result = { ...result, ...sousModuleI18N };
        }
    }

    return result;
};
const useContexteI18n = () => {
    const context = useContext(ContexteI18n);
    if (context === undefined) {
        throw new Error('useContexteI18n must be used within a ContexteI18nProvider');
    }
    return context;
};

export default useContexteI18n;
