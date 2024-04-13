import { ConfigProvider, theme } from 'antd';
import Bouton, { BoutonProps } from './Bouton';
import BoutonContourNeutre from './BoutonContourNeutre';

const BoutonContourSecondaire = (props: BoutonProps) => {
    const { token } = theme.useToken();
    const components = {
        Button: {
            defaultColor: token.colorWarning,
            defaultBg: '#fff',
            defaultBorderColor: token.colorWarning,
            defaultHoverColor: '#fff',
            defaultHoverBg: token.colorWarning,
            defaultHoverBorderColor: token.colorWarning,
        },
    };
    if (props.inactif) {
        return <BoutonContourNeutre {...props} />;
    }
    return (
        <ConfigProvider theme={{ components }}>
            <Bouton {...props} />
        </ConfigProvider>
    );
};

export default BoutonContourSecondaire;
