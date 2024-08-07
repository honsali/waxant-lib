import { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MdlAuth } from '../auth/MdlAuth';
import { ConfigAppType } from '../contexte/ContexteApp';
import useAppDispatch from '../redux/useAppDispatch';
import { listeRoutes } from './PageDefinition';
import PageNotFound from './PageNotFound';

const AppRoutes = ({ config, children }: { config: ConfigAppType; children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            MdlAuth.setUser({
                user: { username: 'invite', roleList: ['ROLE_INVITE'] },
                mapRole: config.mapRole,
            })
        );
    }, []);

    const routes = useMemo(() => {
        const domaine = config.mapDomaine['invite'];
        return domaine?.listeModule?.length ? listeRoutes(domaine.listeModule) : null;
    }, [config]);

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={children}>
                    {routes}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
