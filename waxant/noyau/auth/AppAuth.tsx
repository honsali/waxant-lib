import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import useAppDispatch from '../redux/useAppDispatch';
import { IUser } from './DomaineAuth';
import { MdlAuth } from './MdlAuth';

const AppAuth = ({ keycloakConfig, mapRole, children }) => {
    const dispatch = useAppDispatch();

    const keycloak = new Keycloak(keycloakConfig);

    const onTokens = async (b) => {
        const x = JSON.parse(atob(b.token.split('.')[1]));
        const returnedUser: IUser = {
            username: x.preferred_username,
            roleList: x.realm_access.roles,
            token: b.token,
            expiryTime: x.exp,
            creationTime: Date.now().toString(),
        };
        window.sessionStorage.setItem('auth_token', JSON.stringify(b.token));
        dispatch(MdlAuth.setUser({ user: returnedUser, mapRole }));
    };

    return (
        <ReactKeycloakProvider initOptions={{ onLoad: 'login-required', checkLoginIframe: false }} authClient={keycloak} onTokens={onTokens}>
            {children}
        </ReactKeycloakProvider>
    );
};

export default AppAuth;
