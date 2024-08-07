import { Space } from 'antd';
import styled from 'styled-components';
import { ContexteBoutonProvider } from 'waxant/noyau/contexte/ContexteBouton';

const Composant = styled.div`
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
`;

const BlocActionEncadre = ({ largeur = null, marge = '10px', style = {}, children }) => {
    return (
        <Composant style={{ ...style, padding: marge, width: largeur }}>
            <ContexteBoutonProvider forme="contour">
                <Space>{children}</Space>
            </ContexteBoutonProvider>
        </Composant>
    );
};

export default BlocActionEncadre;
