import { Col, Row, Space } from 'antd';
import styled from 'styled-components';

const Composant = styled(Row)``;

const BlocActionDroit = ({ padding = null, style = {}, children }) => {
    return (
        <Composant align="top">
            <Col span={24} style={{ padding, ...style }}>
                <Space> {children}</Space>
            </Col>
        </Composant>
    );
};

export default BlocActionDroit;
