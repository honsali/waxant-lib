import { ConfigProvider, theme } from 'antd';
import Bouton, { BoutonProps } from './Bouton';
import BoutonPleinNeutre from './BoutonPleinNeutre';

const BoutonPleinSecondaire = (props: BoutonProps) => {
    const { token } = theme.useToken();
    const components = {
        Button: {
            defaultColor: '#fff',
            defaultBg: token.colorWarning,
            defaultBorderColor: token.colorWarning,
            defaultHoverColor: '#fff',
            defaultHoverBg: 'red',
            defaultHoverBorderColor: 'red',
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

export default BoutonPleinSecondaire;
