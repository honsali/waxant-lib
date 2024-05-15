import { useKeycloak } from '@react-keycloak/web';
import { Button, Result } from 'antd';
import { MdlAuth } from '../auth/MdlAuth';
import useI18n from '../i18n/useI18n';
import useAppDispatch from '../redux/useAppDispatch';

export default function PageNotAuthorized() {
    const { i18n } = useI18n();
    const dispatch = useAppDispatch();
    const { keycloak } = useKeycloak();
    const logout = () => {
        keycloak.logout();
        dispatch(MdlAuth.logout());
    };

    return (
        <Result
            status="403" //
            title="403"
            subTitle="Page Non Authorisée"
            extra={
                <Button type="primary" danger onClick={logout}>
                    {i18n('global.action.logout')}
                </Button>
            }
        />
    );
}
