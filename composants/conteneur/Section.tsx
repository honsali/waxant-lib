import { Col, Row } from 'antd';
import styled from 'styled-components';
import useContexteView from 'waxant/noyau/contexte/ContexteView';
import useContexteApp from '../../noyau/contexte/ContexteApp';
import useI18n from '../../noyau/i18n/useI18n';
import ActionLienRetour from '../bouton/actionMetier/ActionLienRetour';

const Composant = styled.div`
    padding: 20px 20px 80px 40px;
`;
const Retour = styled(Col)`
    .ant-btn {
        padding: 0;
    }
`;

const Titre = styled(Col)`
    font-size: 30px;
    font-weight: 300;
    font-family: 'ROBOTO';
    text-transform: capitalize;
    color: #777;
    padding: 5px 5px 10px 0;
    white-space: nowrap;
`;

const Section = ({ titre = null, libelle = null, marge = '0px', blocAction = null, actionRetour = null, children }) => {
    const { i18n } = useI18n();
    const { uc } = useContexteView();
    const appName = useContexteApp().appName;
    document.title = appName + ' ' + (titre ? i18n(titre) : '');

    return (
        <Composant>
            {actionRetour && (
                <Row>
                    <Retour span={24}>
                        <ActionLienRetour action={actionRetour} />
                    </Retour>
                </Row>
            )}
            <Row>
                <Titre flex="none"> {libelle || (titre && i18n(titre)) || i18n(uc + '.titre')}</Titre>
                <Col flex="auto">
                    <div>{blocAction}</div>
                </Col>
            </Row>
            <Row style={{ padding: marge }}>
                <Col span={24}>
                    <div>{children}</div>
                </Col>
            </Row>
        </Composant>
    );
};

export default Section;
