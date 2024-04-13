import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MdlAuth } from '../auth/MdlAuth';
import useAppDispatch from '../redux/useAppDispatch';
import PageNotFound from './PageNotFound';

const AppRoutes = ({ config, children }) => {
    const dispatch = useAppDispatch();
    const [routes, setRoutes] = useState(null);
    useEffect(() => {
        dispatch(
            MdlAuth.setUser({
                user: { username: 'invite', roleList: ['ROLE_INVITE'] },
                mapRole: config.mapRole,
            })
        );
        setRoutes(config.mapDomaine['invite'].routes);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={children}>
                    {routes?.map((r) => r)}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
