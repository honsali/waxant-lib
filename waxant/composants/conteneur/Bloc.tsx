import styled from 'styled-components';

const Composant = styled.div`
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
`;

const Bloc = ({ style = null, marge = '10px', largeur = '100%', children }) => {
    return <Composant style={{ ...style, padding: marge, width: largeur }}>{children}</Composant>;
};

export default Bloc;
