import { Form, Input, Select } from 'antd';
import _ from 'lodash';
import { useContext, useEffect, useState } from 'react';
import useContexteApp from '../../../noyau/contexte/ContexteApp';
import util from '../../../noyau/util/util';
import FormulaireValidateur from '../FormulaireValidateur';

const ChampReferenceAvecFiltre = (props) => {
    const { Option } = Select;
    const [options, setOptions] = useState([]);
    const [current, setCurrent] = useState(null);
    const [referenceListe, setReferenceListe] = useState(null);
    const [selectAttributes, setSelectAttributes] = useState(null);
    const { form, attributes, reference, optionLibelle } = props;
    const newValue = Form.useWatch(attributes.name, form);
    const context = useContexteApp();
    const listerReference = context.listerReference;
    const argValue: any = Form.useWatch(props.arg, form);
    const [arg, setArg] = useState(props.arg);

    useEffect(() => {
        setReference(referenceListe, newValue, false);
    }, [newValue]);

    useEffect(() => {
        if (argValue && argValue.code) {
            setArg(argValue);
        }
    }, [argValue]);

    useEffect(() => {
        if (arg && arg.code) {
            setSelectAttributes({ ...attributes, name: attributes.sname });
            const refOptionList = [];
            const ref = reference ? reference : attributes.lname;
            listerReference({ reference: ref, arg: arg.code }).then((liste) => {
                setReferenceListe(liste);
                liste.forEach((r) => {
                    const libelle = optionLibelle ? r[optionLibelle] : r.libelle;
                    const code = r.code ? r.code : '-1';
                    refOptionList.push(
                        <Option value={code} key={code}>
                            {libelle}
                        </Option>
                    );
                });
                setOptions(refOptionList);
                const z = form.getFieldValue(attributes.name);
                setReference(liste, z, false);
            });
        } else {
            setReferenceListe([]);
            setSelectAttributes({ ...attributes, name: attributes.sname, disabled: true });
        }
    }, [reference, optionLibelle, arg]);

    const valueChanged = (valeur) => {
        setReference(referenceListe, valeur ? { code: valeur } : { code: null }, true);
    };

    const valueCleared = () => {
        setReference(referenceListe, { code: null }, true);
    };

    const setReference = (liste, valeur, notifier) => {
        if (liste && liste.length > 0 && valeur?.code !== current?.code) {
            setCurrent(valeur);
            let x = valeur?.code ? _.find(liste, { code: valeur.code }) : {};
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

            if (notifier && attributes.onChange) {
                attributes.onChange(reference);
            }
        }
    };

    const filter = (input, option) => {
        if (option.children) {
            return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }
        return false;
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
                    <Select //
                        className={'champ-' + attributes.cls}
                        disabled={attributes.disabled || !arg}
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

export default ChampReferenceAvecFiltre;
