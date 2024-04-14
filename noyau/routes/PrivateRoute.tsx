import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
    const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
        if (initialized && !keycloak.authenticated) {
            keycloak.login();
        }
    }, [keycloak]);

    if (initialized && keycloak.authenticated) {
        return children;
    }
};

export default PrivateRoute;
