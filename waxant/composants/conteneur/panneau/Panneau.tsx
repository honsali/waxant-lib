import { Col, Row } from 'antd';
import styled from 'styled-components';
import useI18n from '../../../noyau/i18n/useI18n';

const Composant = styled.div`
    background-color: #fff;
    &.transparent.primaire {
        background-color: transparent;
    }
`;

const Entete = styled(Row)`
    align-items: center;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    &.sansContour.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: #fff;
        border-bottom: 1px solid ${(props) => props.theme.token.colorPrimary};
    }
    &.sansContour.secondaire {
        color: ${(props) => props.theme.token.colorWarning};
        background-color: #fff;
        border-bottom: 1px solid ${(props) => props.theme.token.colorWarning};
    }
    &.plein.primaire {
        color: #fff;
        background-color: ${(props) => props.theme.token.colorPrimary};
        border-bottom: 1px solid ${(props) => props.theme.token.colorPrimary};
        padding: 5px 5px 0 5px;
    }
    &.plein.secondaire {
        color: #fff;
        background-color: ${(props) => props.theme.token.colorWarning};
        border-bottom: 1px solid ${(props) => props.theme.token.colorWarning};
        padding: 5px 5px 0 5px;
    }
    &.encadre.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: ${(props) => `${props.theme.token.colorPrimary}0D`};
        border: 1px solid ${(props) => `${props.theme.token.colorPrimary}4D`};
        border-bottom: 1px solid ${(props) => `${props.theme.token.colorPrimary}80`};
        padding: 5px 5px 0 5px;
    }
    &.encadre.secondaire {
        color: ${(props) => props.theme.token.colorWarning};
        background-color: ${(props) => `${props.theme.token.colorWarning}0D`};
        border: 1px solid ${(props) => `${props.theme.token.colorWarning}4D`};
        border-bottom: 1px solid ${(props) => `${props.theme.token.colorWarning}80`};
        padding: 5px 5px 0 5px;
    }
    &.simple.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: #fdfdfa;
        border: none;
        border-bottom: 1px solid ${(props) => `${props.theme.token.colorPrimary}1A`};
        padding: 5px 5px 0 5px;
    }
    &.simple.secondaire {
        color: ${(props) => props.theme.token.colorWarning};
        background-color: #fffef6;
        border: none;
        border-bottom: 1px solid ${(props) => `${props.theme.token.colorWarning}1A`};
        padding: 5px 5px 0 5px;
    }
    &.transparent.primaire {
        color: ${(props) => props.theme.token.colorPrimary};
        background-color: transparent;
        border: none;
        border-bottom: 1px solid ${(props) => `${props.theme.token.colorPrimary}4D`};
        padding: 5px 5px 0 5px;
    }
`;

const Titre = styled(Col)`
    flex: none;
    padding-bottom: 3px;
    font-weight: 700;
`;

const Action = styled(Col)`
    flex: auto;
    text-align: right;
    height: 28px;
    .ant-btn {
        padding: 2px 10px 0 10px;
        height: 22px;
        font-size: 12px;
    }
`;

const Corps = styled(Row)`
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    &.sansContour.primaire {
    }
    &.sansContour.secondaire {
    }
    &.plein.primaire {
        border: 1px solid ${(props) => `${props.theme.token.colorPrimary}4D`};
    }
    &.plein.secondaire {
        border: 1px solid ${(props) => `${props.theme.token.colorWarning}4D`};
    }
    &.encadre.primaire {
        background-color: #fff;
        border: 1px solid ${(props) => `${props.theme.token.colorPrimary}4D`};
        border-top: none;
    }
    &.encadre.secondaire {
        background-color: #fff;
        border: 1px solid ${(props) => `${props.theme.token.colorWarning}4D`};
        border-top: none;
    }
    &.simple.primaire {
        background-color: #fff;
        border: none;
    }
    &.simple.secondaire {
        background-color: #fff;
        border: none;
    }
    &.transparent.primaire {
        background-color: transparent;
        border: none;
    }
`;

const Panneau = ({ titre = null, libelle = null, marge = '10px', type = 'sansContour', couleur = 'primaire', blocAction = null, children }) => {
    const i18n = useI18n();
    return (
        <Composant className={type + ' ' + couleur}>
            {(titre || libelle) && (
                <Entete className={type + ' ' + couleur}>
                    <Titre> {libelle || i18n.titre(titre)}</Titre>
                    <Action> {blocAction}</Action>
                </Entete>
            )}
            <Corps className={type + ' ' + couleur} style={{ padding: marge }}>
                <Col span={24}>{children}</Col>
            </Corps>
        </Composant>
    );
};

export default Panneau;
