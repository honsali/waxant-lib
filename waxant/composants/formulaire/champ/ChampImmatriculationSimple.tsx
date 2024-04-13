import { Form } from 'antd';
import { MaskedInput } from 'antd-mask-input';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import util from '../../../noyau/util/util';
import FormulaireValidateur from '../FormulaireValidateur';

const ChampImmatriculationSimple = (props) => {
    const [value, setValue] = useState('');
    const { form, attributes } = props;

    useEffect(() => {
        const immatriculation = form.getFieldValue(attributes.name);
        if (util.nonNul(immatriculation)) {
            setValue(immatriculation);
        } else {
            setValue('');
        }
    }, [form, attributes]);

    const changerValeur = (e) => {
        if (_.isArray(attributes.name)) {
            const v = {};
            const d = {};
            d[attributes.name[1]] = e;
            v[attributes.name[0]] = d;
            props.form.setFieldsValue(v);
        } else {
            const d = {};
            d[attributes.name] = e;
            props.form.setFieldsValue(d);
        }
    };

    const validateur = useContext(FormulaireValidateur);

    const getRules = () => {
        const n = _.isArray(attributes.name) ? _.join(attributes.name, '.') : attributes.name;
        if (attributes.requis || (validateur && validateur[n] && validateur[n].requis)) {
            return { required: true, message: attributes.label + ' est requis.', whitespace: true };
        }
        return { required: false };
    };

    return (
        <Form.Item rules={[getRules]}>
            <MaskedInput
                className={'champ-' + form.name + '-immatriculation'}
                value={value}
                onChange={changerValeur}
                mask="00000-a-0"
                placeholder="12345-A-1"
                maskOptions={{
                    lazy: false,
                    prepare: (str) => {
                        return str.toUpperCase();
                    },
                }}
            />
        </Form.Item>
    );
};

export default ChampImmatriculationSimple;
