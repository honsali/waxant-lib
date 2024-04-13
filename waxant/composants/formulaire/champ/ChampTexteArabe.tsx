import { CodeOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import _ from 'lodash';
import { useContext, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import FormulaireValidateur from '../FormulaireValidateur';

const layout = {
    default: [
        '\u0636 \u0635 \u062B \u0642 \u0641 \u063A \u0639 \u0647 \u062E \u062D \u062C', //
        '\u0634 \u0633 \u064A \u0628 \u0644 \u0627 \u062A \u0646 \u0645 \u0643 \u0637',
        '\u0630 \u0626 \u0621 \u0624 \u0631 \u0649 \u0629 \u0648 \u0632 \u0638 \u062F',
        '{enter} {space} {bksp}',
    ],
};

const display = {
    '{bksp}': 'مسح',
    '{space}': 'مساحة',
    '{enter}': 'انتهاء',
};

const ChampTexteArabe = (props) => {
    const validateur = useContext(FormulaireValidateur);
    const [clavierOuvert, setClavierOuvert] = useState(false);
    const [keyboard, setKeyBoard] = useState();
    const getRules = () => {
        const n = _.isArray(props.attributes.name) ? _.join(props.attributes.name, '.') : props.attributes.name;
        if (props.attributes.requis || (validateur && validateur[n] && validateur[n].requis)) {
            return { required: true, message: props.attributes.label + ' est requis.', whitespace: true };
        }
        return { required: false };
    };

    const onChange = (value) => {
        if (_.isArray(props.attributes.name)) {
            const v = {};
            const d = {};
            d[props.attributes.name[1]] = value;
            v[props.attributes.name[0]] = d;
            props.form.setFieldsValue(v);
        } else {
            const d = {};
            d[props.attributes.name] = value;
            props.form.setFieldsValue(d);
        }
    };
    const onKeyPress = (key) => {
        if (key === '{enter}') {
            setClavierOuvert(false);
        }
    };
    const ouvrirClavier = () => {
        setClavierOuvert(!clavierOuvert);
    };
    return (
        <div>
            <Form.Item {...props.attributes} rules={[getRules]} style={{ ...props.attributes.style }}>
                <Input
                    readOnly={clavierOuvert}
                    addonBefore={<CodeOutlined onClick={ouvrirClavier} />}
                    style={props.largeur ? { width: props.largeur + 'px', direction: 'rtl' } : { direction: 'rtl' }} //
                />
            </Form.Item>
            <div style={{ position: 'absolute', zIndex: '999', width: '100%' }}>{clavierOuvert && <Keyboard rtl={true} keyboardRef={(r) => setKeyBoard(r)} layout={layout} display={display} onChange={onChange} onKeyPress={onKeyPress} />}</div>
        </div>
    );
};

export default ChampTexteArabe;
