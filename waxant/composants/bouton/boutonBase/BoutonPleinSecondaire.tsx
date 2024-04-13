import styled from 'styled-components';
import Bouton, { BoutonProps } from './Bouton';
import BoutonPleinNeutre from './BoutonPleinNeutre';

const Composant = styled(Bouton)`
    color: #fff;
    background-color: ${(props) => props.theme.token.colorWarning};
    border-color: ${(props) => props.theme.token.colorWarning};
    &:hover {
        color: #fff;
        background-color: red;
        border-color: red;
    }
`;

const BoutonPleinSecondaire = (props: BoutonProps) => {
    return props.inactif ? <BoutonPleinNeutre {...props} /> : <Composant {...props} />;
};

export default BoutonPleinSecondaire;
