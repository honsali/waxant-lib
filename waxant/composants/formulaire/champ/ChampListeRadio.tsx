import { Form, Radio, Space } from 'antd';

const ChampListeRadio = (props: any) => {
    const valueChanged = (v) => {
        if (props.attributes.onChange) {
            props.attributes.onChange(v.target?.value);
        }
    };

    return (
        <Form.Item {...props.attributes} onChange={valueChanged}>
            <Radio.Group>
                <Space direction={props.direction ? props.direction : 'horizontal'}>
                    {props.liste.map((l) => (
                        <Radio value={l.code} key={l.code}>
                            {l.libelle}
                        </Radio>
                    ))}
                </Space>
            </Radio.Group>
        </Form.Item>
    );
};

export default ChampListeRadio;
