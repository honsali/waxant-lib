import Icon from '@ant-design/icons';
import { Avatar, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useI18n from '../../noyau/i18n/useI18n';

const Composant = styled(Tabs)`
    &.sousMenuOnglet {
        .ant-tabs-nav-wrap {
        }
        .ant-tabs-nav {
            margin: 0;
            .ant-tabs-tab {
                .tab-title {
                }

                &.ant-tabs-tab-active {
                }
            }
        }
        .ant-tabs-content-holder {
        }
    }
`;

const SousMenuOnglet = ({ ongletActif = null, siOngletChange = null, children }) => {
    const i18n = useI18n();
    const [activeKey, setActiveKey] = useState();

    const attributs = {} as any;
    const onTabClickActions = {};
    // attributs.defaultActiveKey = children[0].key;

    useEffect(() => {
        if (ongletActif) {
            setActiveKey(ongletActif);
        }
    }, [ongletActif]);

    const getTabs = () => {
        const array = Array.isArray(children) ? children : [children];
        const tabs = array.map((c) => {
            onTabClickActions[c.key] = c.props.actionClick;
            const tab = c.props.entete ? (
                c.props.entete
            ) : (
                <span>
                    {c.props.icon && <Avatar className="tab-title" shape="circle" src={<Icon component={c.props.icon} />} size={18} />}
                    {i18n.libelle(c.key)}
                </span>
            );
            return { label: tab, key: c.key, children: c.props.children };
        });
        return tabs;
    };

    const handleChange = (selectedkey) => {
        setActiveKey(selectedkey);

        if (siOngletChange) {
            siOngletChange(selectedkey);
        }

        const action = onTabClickActions[selectedkey];
        if (action) {
            action();
        }
    };

    return <Composant className="sousMenuOnglet" type="line" activeKey={activeKey} animated={{ inkBar: false }} tabBarGutter={10} {...attributs} onTabClick={handleChange} items={getTabs()} />;
};

export default SousMenuOnglet;
