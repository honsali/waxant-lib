import { Col, Form, Row } from 'antd';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { MdlMessage } from '../../noyau/message/MdlMessage';
import useAppDispatch from '../../noyau/redux/useAppDispatch';
import ListeChamp from './ListeChamp';
import useFormConverter from './useFormConverter';

const FormulaireInline = ({ form, siChange = null, nom = null, style = null, actionBloc = null, children }) => {
    const dispatch = useAppDispatch();
    const [items, setItems] = useState([]);
    const [hiddenItems, setHiddenItems] = useState([]);
    const convert = useFormConverter();

    useEffect(() => {
        const hiddenListe = [];
        const liste = [];

        React.Children.forEach(children, (child, index) => {
            const key = `col-${index}`;
            liste.push(
                <Col key={key} flex={child.props.largeur ? child.props.largeur : 'auto'}>
                    {React.cloneElement(child, { attributes: convert(nom, child.props), form })}
                </Col>
            );
        });

        setHiddenItems(hiddenListe);
        setItems(liste);
    }, [children, form, siChange]);

    const onFieldsChange = (changedFields, allFields) => {
        siChange?.(changedFields, allFields);
        dispatch(MdlMessage.initialiser());
    };

    return (
        <Form //
            form={form}
            name={nom ? nom : _.uniqueId()}
            style={style}
            layout="vertical"
            onFieldsChange={onFieldsChange}
        >
            <Row gutter={20}>
                <Col flex="auto">
                    <ListeChamp>{items}</ListeChamp>
                </Col>
                {actionBloc && (
                    <Col flex="none" style={{ paddingTop: '20px' }}>
                        {actionBloc}
                    </Col>
                )}
            </Row>

            <div>{hiddenItems}</div>
        </Form>
    );
};

export default FormulaireInline;
