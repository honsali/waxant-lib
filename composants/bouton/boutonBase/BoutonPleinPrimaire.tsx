import { ConfigProvider, theme } from 'antd';
import Bouton, { BoutonProps } from './Bouton';
import BoutonPleinNeutre from './BoutonPleinNeutre';

const BoutonPleinPrimaire = (props: BoutonProps) => {
    const { token } = theme.useToken();
    const components = {
        Button: {
            defaultColor: '#fff',
            defaultBg: token.colorPrimary,
            defaultBorderColor: token.colorPrimary,
            defaultHoverColor: '#fff',
            defaultHoverBg: token.colorWarning,
            defaultHoverBorderColor: token.colorWarning,
        },
    };

    if (props.inactif) {
        return <BoutonPleinNeutre {...props} />;
    }
    return (
        <ConfigProvider theme={{ components }}>
            <Bouton {...props} />
        </ConfigProvider>
    );
};

export default BoutonPleinPrimaire;
