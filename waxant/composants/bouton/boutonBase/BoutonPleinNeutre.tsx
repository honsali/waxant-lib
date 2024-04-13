import { ConfigProvider } from 'antd';
import styled from 'styled-components';
import Bouton, { BoutonProps } from './Bouton';

export const Composant = styled(Bouton)`
    &:hover {
        cursor: not-allowed;
    }
`;

const BoutonPleinNeutre = (props: BoutonProps) => {
    const components = {
        Button: {
            defaultColor: '#fff',
            defaultBg: '#aaa',
            defaultBorderColor: '#aaa',
            defaultHoverColor: '#fff',
            defaultHoverBg: '#999',
            defaultHoverBorderColor: '#999',
            defaultHoverCursor: 'not-allowed',
        },
    };
    return (
        <ConfigProvider theme={{ components }}>
            <Composant {...props} />
        </ConfigProvider>
    );
};

export default BoutonPleinNeutre;
