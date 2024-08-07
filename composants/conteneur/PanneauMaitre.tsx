import { Col, Row } from 'antd';
import _ from 'lodash';
import { useCallback } from 'react';
import styled from 'styled-components';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import useI18n from '../../noyau/i18n/useI18n';

const Composant = styled.div`
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    border-radius: 6px;
`;

const Entete = styled(Row)`
    align-items: center;
    color: ${(props) => props.theme.token.colorPrimary};
    background-color: #fdfdfa;
    padding: 5px 10px;
    border-bottom: 1px solid #ddd;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

const Corps = styled.div`
    background-color: #fff;
    min-height: 400px;
    padding: 20px 20px 30px 20px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const Pied = styled.div`
    background-color: #fdfdfa;
    border-top: 1px solid #ddd;
    padding: 10px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;

const Titre = styled(Col)`
    flex: none;
    display: inline-block;
    padding-top: 8px;
    font-weight: 400;
    font-size: 22px;
`;

const Action = styled(Col)`
    flex: auto;
    text-align: right;
`;

const TagEtat = styled.span`
    margin-left: 10px;
    padding: 3px 6px;
    font-weight: bold;
    font-size: 10px;
    color: #fff;
    background-color: ${(props) => props.theme.token.colorWarning};
    border-radius: 4px;
`;

const PanneauMaitre = ({ titre = null, libelle = null, etat = null, blocAction = null, children }) => {
    const { i18n } = useI18n();
    const { uc } = useContexteView();
    const getContent = useCallback(() => {
        if (_.isArray(children)) {
            return children.map((c) => {
                if (c?.key !== 'footer') {
                    return c;
                }
            });
        } else {
            return children;
        }
    }, [children]);

    const getBlocAction = useCallback(() => {
        const blocAction =
            _.isArray(children) &&
            children.find((c) => {
                return c?.key === 'footer';
            });
        if (blocAction) {
            return <Pied>{blocAction}</Pied>;
        }
    }, [children]);

    return (
        <Composant>
            <Entete>
                <Titre flex="none"> {libelle || (titre && i18n(titre)) || i18n(uc + '.titre')}</Titre>
                {etat && <TagEtat>{etat}</TagEtat>}
                <Action>{blocAction}</Action>
            </Entete>
            <Corps>{getContent()}</Corps>
            {getBlocAction()}
        </Composant>
    );
};

export default PanneauMaitre;
