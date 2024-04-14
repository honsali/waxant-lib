import { Col, Row } from 'antd';
import styled from 'styled-components';

const Composant = styled(Col)`
    padding: 94px 40px 80px 0px;
`;

const DemiPageDroite = ({ marge = '0px', children }) => {
    return (
        <Composant span={12}>
            <Row style={{ padding: marge }}>
                <Col span={24}>{children}</Col>
            </Row>
        </Composant>
    );
};

export default DemiPageDroite;
