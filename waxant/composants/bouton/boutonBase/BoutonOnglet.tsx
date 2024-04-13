import styled from 'styled-components';

const Composant = styled.div`
    padding-left: 0 !important;
    padding-right: 0 !important;
    color: #888;
    background-color: #ddd;
    &:hover {
        color: #fff;
        background-color: ${(props) => props.theme.token.colorPrimary};
    }
`;

const BoutonOnglet = ({ action = null, icone, visible }) => {
    if (visible) {
        return <Composant onClick={action}>{icone}</Composant>;
    }
};

export default BoutonOnglet;
