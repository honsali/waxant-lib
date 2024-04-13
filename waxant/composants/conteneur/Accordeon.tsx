import { Collapse, CollapseProps } from 'antd';
import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const liste: CollapseProps['items'] = [];
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
            setBlocCourant(liste?.length > 0 ? [liste[0].key] : null);
        }
    }, [props.children]);

    const init = () => {};
    const siChange = (v) => {
        const nouveau = v?.length > 0 ? v[0] : null;
        const courant = blocCourant?.length > 0 ? blocCourant[0] : null;
        setBlocCourant(v);
        if (props.siChange) {
            props.siChange(courant, nouveau);
        }
    };
    return <Composant items={items} accordion activeKey={blocCourant} expandIconPosition={'end'} bordered={false} onChange={siChange}></Composant>;
};

export default Accordeon;
