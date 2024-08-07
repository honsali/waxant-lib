import { Form, Input, Select } from 'antd';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import util from '../../../noyau/util/util';
import FormulaireValidateur from '../FormulaireValidateur';

const ChampListe = (props) => {
    const { Option } = Select;
    const [options, setOptions] = useState([]);
    const [maxLength, setMaxLength] = useState(0);
    const [current, setCurrent] = useState(null);
    const [referenceListe, setReferenceListe] = useState(null);
    const [selectAttributes, setSelectAttributes] = useState(null);
    const { form, attributes, liste, optionLibelle, adapterLargeur } = props;
    const newValue = Form.useWatch(attributes.name, form);

    useEffect(() => {
        setReference(referenceListe, newValue);
    }, [newValue]);

    useEffect(() => {
        setSelectAttributes({ ...attributes, name: attributes.sname });
        const refOptionList = [];
        if (liste) {
            let max = 0;
            setReferenceListe(liste);
            if (Array.isArray(liste)) {
                liste.forEach((r) => {
                    const libelle = optionLibelle ? r[optionLibelle] : r.libelle;
                    max = util.estNul(libelle) ? max : Math.max(max, libelle.length);
                    const code = r.code ? r.code : '-1';
                    refOptionList.push(
                        <Option value={code} key={code}>
                            {libelle}
                        </Option>
                    );
                });
            }
            setOptions(refOptionList);
            setMaxLength(max);
            const z = form.getFieldValue(attributes.name);
            setReference(liste, z);
        }
    }, [liste, optionLibelle]);

    const valueChanged = (valeur) => {
        setReference(referenceListe, valeur ? { code: valeur } : { code: null });
    };

    const valueCleared = () => {
        setReference(referenceListe, { code: null });
    };

    const setReference = (liste, a) => {
        if (liste && liste.length > 0 && a?.code !== current?.code) {
            setCurrent(a);
            let x = a?.code ? _.find(liste, { code: a.code }) : {};
            if (util.estVide(x)) {
                x = { id: null, code: null, libelle: null };
            }
            if (_.isArray(attributes.name)) {
                const v = {};
                const d = {};
                d[attributes.name[1]] = x;
                d[attributes.sname[1]] = x?.libelle;
                v[attributes.name[0]] = d;
                form.setFieldsValue(v);
            } else {
                const d = {};
                d[attributes.name] = x;
                d[attributes.sname] = x?.libelle;
                form.setFieldsValue(d);
            }
            if (attributes.onChange) {
                attributes.onChange(x);
            }
        }
    };

    const filter = (input, option) => {
        if (option.children) {
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return false;
    };

    const getStyle = () => {
        return adapterLargeur ? { ...attributes.style, width: maxLength + 5 + 'ch' } : { ...attributes.style, width: '100%' };
    };

    const validateur = useContext(FormulaireValidateur);

    const getRules = () => {
        const n = _.isArray(attributes.name) ? _.join(attributes.name, '.') : attributes.name;
        if (attributes.requis || (validateur && validateur[n + '.code'] && validateur[n + '.code'].requis)) {
            return { required: true, message: attributes.label + ' est requis.' };
        }
        return { required: false };
    };

    if (selectAttributes) {
        return (
            <div style={attributes.style}>
                <Form.Item {...selectAttributes} rules={[getRules]}>
                    <Select
                        style={getStyle()} //
                        className={'champ-' + attributes.cls}
                        disabled={attributes.disabled}
                        showSearch
                        optionFilterProp="children"
                        allowClear
                        filterOption={filter}
                        onChange={valueChanged}
                        onClear={valueCleared}
                    >
                        {options}
                    </Select>
                </Form.Item>
                <Form.Item name={attributes.name} noStyle>
                    <Input style={{ display: 'none' }} />
                </Form.Item>
            </div>
        );
    }
};

export default ChampListe;
