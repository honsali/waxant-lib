import { Collapse } from 'antd';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export const Composant = styled(Collapse)`
    background-color: transparent;
    margin: 0;
    padding: 0;
    border: none;
    .ant-collapse-item {
        margin: 10px 0px;
        border-radius: 4px;
        background-color: #fdfdfa;
        // border:1px solid #DDD !important ;
        box-shadow: 0 0 2px 1px #e9e9e9;
        border-bottom: none !important ;
        .ant-collapse-header {
            font-size: 18px;
            color: #555 !important;
            font-family: 'Roboto';
            font-weight: 700;
            padding-left: 20px !important;

            border-radius: 4px;
            &:hover {
                color: ${(props) => props.theme.token.colorPrimary} !important;
                box-shadow: 0 0 3px 0px ${(props) => props.theme.token.colorPrimary};
            }
        }

        &.ant-collapse-item-active {
            box-shadow: 0 0 2px 1px #e9e9e9;
            .ant-collapse-header {
                color: ${(props) => props.theme.token.colorPrimary} !important;
                border-bottom: 1px solid ${(props) => props.theme.token.colorPrimary};
                background-color: #fdfdfa;
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
                &:hover {
                    box-shadow: none;
                }
            }

            .ant-collapse-content {
                padding-top: 10px;
                background-color: #ffffff;
            }
        }
    }
`;

const Accordeon = (props) => {
    const [items, setItems] = useState(null);
    const [blocCourant, setBlocCourant] = useState([]);
    const previousBlocCourantRef = useRef([]);

    useEffect(() => {
        const liste = [];
        props.children.forEach((c) => {
            if (c && c.props.id) {
                liste.push({
                    forceRender: c.props.afficherToujours,
                    key: c.props.id,
                    label: c.props.header,
                    children: c,
                });
            }
        });
        setItems(liste);
        if (blocCourant?.length === 0) {
            const c = liste?.length > 0 ? [liste[0].key] : null;
            setBlocCourant(c);
            update(c);
        }
    }, [props.children]);

    useEffect(() => {
        setBlocCourant(props.blocOuvert);
        update(props.blocOuvert);
    }, [props.blocOuvert]);

    const update = (x) => {
        const previousBlocCourant = previousBlocCourantRef.current;
        const courant = previousBlocCourant?.length > 0 ? previousBlocCourant[0] : null;
        const nouveau = x?.length > 0 ? x[0] : null;

        if (props.siChange && courant !== nouveau) {
            props.siChange(courant, nouveau);
        }

        previousBlocCourantRef.current = x;
    };

    const siChange = (v) => {
        setBlocCourant(v);
        update(v);
    };

    return <Composant items={items} accordion activeKey={blocCourant} expandIconPosition={'end'} bordered={false} onChange={siChange}></Composant>;
};

export default Accordeon;
