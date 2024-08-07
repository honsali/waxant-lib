import { Col, Row, Space } from 'antd';

const BlocActionDroit = ({ padding = null, style = {}, children }) => {
    return (
        <Row align="top">
            <Col span={24} style={{ padding, ...style }}>
                <Space>{children}</Space>
            </Col>
        </Row>
    );
};

export default BlocActionDroit;
