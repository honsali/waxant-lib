import { DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import useContexteApp from '../../../noyau/contexte/ContexteApp';
import FormulaireValidateur from '../FormulaireValidateur';

const ChampDate = (props: any) => {
    const formatDate = useContexteApp().formatDate;
    const [localAttributes, setLocalAttributes] = useState({});
    const { form, attributes } = props;
    const style = { style: { ...attributes.style, width: '100%' } };
    if (props.style && props.style.width) {
        style.style.width = props.style.width;
    }

    useEffect(() => {
        if (form.__INTERNAL__.name) {
            const stringDate = form.getFieldValue(attributes.name);
            const binaryDate = stringDate ? dayjs(stringDate, formatDate) : null;

            if (_.isArray(attributes.name)) {
                const v = {};
                const d = {};
                d[attributes.sname[1]] = binaryDate;
                v[attributes.name[0]] = d;
                form.setFieldsValue(v);
            } else {
                const d = {};
                d[attributes.sname] = binaryDate;
                form.setFieldsValue(d);
            }
            setLocalAttributes({ label: attributes.label, name: attributes.sname, lname: attributes.lname });
        }
    }, [form, attributes]);

    const changerValeur = (binaryDate, stringDate) => {
        if (_.isArray(attributes.name)) {
            const v = {};
            const d = {};
            d[attributes.name[1]] = stringDate;
            v[attributes.name[0]] = d;
            form.setFieldsValue(v);
        } else {
            const d = {};
            d[attributes.name] = stringDate;
            form.setFieldsValue(d);
        }

        if (attributes.onChange) {
            attributes.onChange(stringDate);
        }
    };

    const validateur = useContext(FormulaireValidateur);

    const getRules = () => {
        const n = _.isArray(attributes.name) ? _.join(attributes.name, '.') : attributes.name;
        if (attributes.requis || (validateur && validateur[n] && validateur[n].requis)) {
            return { required: true, message: attributes.label + ' est requis.' };
        }
        return { required: false };
    };

    return (
        <div>
            <Form.Item {...localAttributes} rules={[getRules]}>
                <DatePicker
                    format={formatDate} //
                    {...style}
                    onChange={changerValeur}
                    disabledDate={props.intervalleDate}
                    disabled={props.attributes.disabled}
                />
            </Form.Item>

            <Form.Item name={attributes.name} noStyle>
                <Input style={{ display: 'none' }} />
            </Form.Item>
        </div>
    );
};

export default ChampDate;
