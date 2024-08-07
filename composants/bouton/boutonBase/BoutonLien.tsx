import { ConfigProvider, theme } from 'antd';
import Bouton, { BoutonProps } from './Bouton';

const BoutonLien = (props: BoutonProps) => {
    const { token } = theme.useToken();
    const components = {
        Button: {
            defaultColor: '#aaa',
            defaultBg: 'transparent',
            defaultBorderColor: 'transparent',
            defaultHoverColor: token.colorPrimary,
            defaultHoverBg: 'transparent',
            defaultHoverBorderColor: 'transparent',
        },
    };

    return (
        <ConfigProvider theme={{ components }}>
            <Bouton {...props} />
        </ConfigProvider>
    );
};

export default BoutonLien;
