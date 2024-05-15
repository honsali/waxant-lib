import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { selectRole } from '../auth/MdlAuth';
import { ConfigAppType } from '../contexte/ContexteApp';
import useDynamicStore from '../redux/DynamicStoreContext';
import { listeReducer, listeRoutes } from './PageDefinition';
import PageNotAuthorized from './PageNotAuthorized';
import PageNotFound from './PageNotFound';
import PrivateRoute from './PrivateRoute';

const AppPrivateRoutes = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    const role = useSelector(selectRole);
    const { changerStore } = useDynamicStore();

    useEffect(() => {
        if (role) {
            const domaine = config.mapDomaine[role];
            const allReducers = domaine?.listeModule ? listeReducer({}, domaine.listeModule) : {};
            changerStore(allReducers);
        }
    }, [role, config.mapDomaine, changerStore]);
    const routes = useMemo(() => {
        if (role) {
            const domaine = config.mapDomaine[role];
            return domaine?.listeModule?.length ? listeRoutes(domaine.listeModule) : null;
        }
        return null;
    }, [role, config]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                {routes ? (
                    <Route path="/" element={<PrivateRoute>{children}</PrivateRoute>}>
                        {routes}
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                ) : (
                    <Route path="*" element={<PageNotAuthorized />} />
                )}
            </Routes>
        </BrowserRouter>
    );
};

export default AppPrivateRoutes;
